import { getRepository } from 'typeorm';

import User from '../models/User';
import AppError from '../errors/AppError';

class UpdateUserToDeliverymanService {
  public async execute(user_id: string): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) throw new AppError('Only authenticated users can do it', 401);

    user.is_deliveryman = true;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserToDeliverymanService;
