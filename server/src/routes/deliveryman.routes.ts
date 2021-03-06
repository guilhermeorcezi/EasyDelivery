import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import SearchDeliverymanService from '../services/SearchDeliverymanService';
import FavoriteDeliverymanService from '../services/FavoriteDeliverymanService';
import DeleteFavoriteDeliverymanService from '../services/DeleteFavoriteDeliverymanService';
import CountAllDeliverymanService from '../services/CountAllDeliverymanService';

const deliverymanRouter = Router();

deliverymanRouter.post(
  '/favorite/:id',
  ensureAuthenticated,
  async (request, response) => {
    const favoriteDeliveryman = new FavoriteDeliverymanService();

    const logged_user_id = request.user.id;
    const favorited_user_id = request.params.id;

    await favoriteDeliveryman.execute({ logged_user_id, favorited_user_id });

    return response.status(204).send();
  },
);

deliverymanRouter.get('/', ensureAuthenticated, async (request, response) => {
  const filters = request.query;

  const uf = filters.uf as string;
  const city = filters.city as string;

  const searchDeliveryman = new SearchDeliverymanService();

  const deliveryman = await searchDeliveryman.execute({ uf, city });

  deliveryman.map(eachDeliveryman => delete eachDeliveryman.password);

  return response.json(deliveryman);
});

deliverymanRouter.get(
  '/count',
  ensureAuthenticated,
  async (request, response) => {
    const countAllDeliveryman = new CountAllDeliverymanService();

    const countDeliveryman = await countAllDeliveryman.execute();

    return response.json(countDeliveryman);
  },
);

deliverymanRouter.delete(
  '/favorite/:id',
  ensureAuthenticated,
  async (request, response) => {
    const deleteFavoriteDeliveryman = new DeleteFavoriteDeliverymanService();

    const logged_user_id = request.user.id;
    const favorited_user_id = request.params.id;

    await deleteFavoriteDeliveryman.execute({
      logged_user_id,
      favorited_user_id,
    });

    return response.status(204).send();
  },
);

export default deliverymanRouter;
