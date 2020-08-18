import db from '../database/connection';
import { Request, Response, json } from 'express';

export default class UserController {
	async create(request: Request, response: Response) {
		const { name, email, password, whatsapp, avatar } = request.body;

		try {
			await db('users').insert({ name, email, password, whatsapp, avatar, is_motoboy:false });

			response.status(201).json({ created: 'ok' });
		} catch (err) {
			response.status(400).json({ created: false });
		}
	}
}
