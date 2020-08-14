import db from '../database/connection';
import { Request, Response, json } from 'express';

export default class FavoritesController {
	async create(request: Request, response: Response) {
		const { id } = request.params;
		//const { user_id } = request;

		try {
			await db('favorites').insert({ id });

			response.status(201).json({ favorited: 'ok' });
		} catch (err) {
			response.status(400).json({ favorited: false });
		}
	}

	async remove(request: Request, response: Response) {
		const { id } = request.params;
		// const { user_id } = req;

		try {
			await db('favorites')
				.where('user_id_logged')
				.and.where('user_id_favorited', id)
				.del();

			response.status(201).json({ favorited: 'ok' });
		} catch (err) {
			response.status(400).json({ favorited: false });
		}
	}
}
