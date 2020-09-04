import { getRepository } from 'typeorm';

import User from '../models/User';
import Favorite from '../models/Favorite';
import AppError from '../errors/AppError';

class ShowFavoritedDeliverymanService {
  public async execute(logged_user_id: string): Promise<Favorite[]> {
    const userRepository = getRepository(User);
    const favoriteRepository = getRepository(Favorite);

    //if (!logged_user) throw new AppError('Missing filters to search', 400);

    const favoritesDeliveryman = await favoriteRepository.find({
      where: { logged_user_id },
    });

    console.log('result', favoritesDeliveryman);

    return favoritesDeliveryman;
  }
}

export default ShowFavoritedDeliverymanService;
