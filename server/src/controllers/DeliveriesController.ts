import db from '../database/connection';
import { Request, Response } from 'express';

export default class DeliveriesController {
	async create(request: Request, response: Response) {
		const { id: service_id } = request.params;
		const { description, id: motoboy_id } = request.body;
		// const {user_id} = req;

		try {
			await db('deliveries').insert({
				service_id,
				description,
				motoboy_id,
				user_id: 1,
			});

			response.status(201).json({ created: 'ok' });
		} catch (err) {
			response.status(400).json({ created: false });
		}
	}
}
