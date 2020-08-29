import { getRepository } from 'typeorm';

import Favorite from '../models/Favorite';

interface Request {
  logged_user_id: string;
  favorited_user_id: string;
}

class FavoriteDeliverymanService {
  public async execute({
    logged_user_id,
    favorited_user_id,
  }: Request): Promise<void> {
    const userRepository = getRepository(Favorite);

    await userRepository.create({
      logged_user_id,
      favorited_user_id,
    });
  }
}

export default FavoriteDeliverymanService;
