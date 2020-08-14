import db from '../database/connection';
import { Request, Response } from 'express';

export default class UserController {
	async index(request: Request, response: Response) {
		const filters = request.query;

		const uf = filters.uf as string;
		const city = filters.city as string;

		if (!filters.uf || !filters.city) {
			return response.status(400).json({ error: 'Missing filters to search' });
		}

		const motoboys = await db('users')
			.whereExists(function () {
				this.select('user_location.*')
					.from('user_location')
					.whereRaw('`user_location`.`user_id` = `users`.`id`');
			})
			.join('user_location', 'users.id', '=', 'user_location.user_id')
			.select(['user_location.*','users.*']);

		return response.json(motoboys);
	}

	async create(request: Request, response: Response) {
		const { name, email, password, whatsapp, avatar, uf, city } = request.body;

		const trx = await db.transaction();

		try {
			const insertedUser = await trx('users').insert({
				name,
				email,
				password,
				whatsapp,
				avatar,
			});

			const user_id = insertedUser[0];

			const userLocation = await trx('user_location').insert({
				user_id,
				uf,
				city,
			});

			await trx.commit();

			response.status(201).json({ created: 'ok' });
		} catch (err) {
			await trx.rollback();

			response.status(400).json({ created: false });
		}
	}
}
