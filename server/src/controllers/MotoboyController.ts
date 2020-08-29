import { Request, Response } from 'express';
import db from '../database/connection';

export default class UserController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const uf = filters.uf as string;
    const city = filters.city as string;

    if (!filters.uf || !filters.city) {
      return response.status(400).json({ error: 'Missing filters to search' });
    }

    const motoboys = await db('users').where({ uf, city, is_motoboy: true });

    return response.json(motoboys);
  }
}
