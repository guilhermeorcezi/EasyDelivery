import { getRepository } from 'typeorm';

import User from '../models/User';
import AppError from '../errors/AppError';

class SearchDeliverymanService {
  public async execute(): Promise<number> {
    const userRepository = getRepository(User);

    const countDeliveryman = await userRepository.count({
      where: { is_deliveryman: true },
    });

    return countDeliveryman;
  }
}

export default SearchDeliverymanService;
