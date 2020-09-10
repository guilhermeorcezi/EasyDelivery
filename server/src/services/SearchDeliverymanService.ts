import { getRepository } from 'typeorm';

import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  uf: string;
  city: string;
}

class SearchDeliverymanService {
  public async execute({ uf, city }: Request): Promise<User[]> {
    const userRepository = getRepository(User);

    if (!uf || !city) throw new AppError('Missing filters to search', 400);

    const deliverymans = await userRepository.find({
      where: { uf, city, is_deliveryman: true },
    });

    return deliverymans;
  }
}

export default SearchDeliverymanService;
