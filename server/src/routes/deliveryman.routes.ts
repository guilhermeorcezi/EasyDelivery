import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import SearchDeliverymanService from '../services/SearchDeliverymanService';

const deliverymanRouter = Router();

deliverymanRouter.get('/', async (request, response) => {
  const filters = request.query;

  const uf = filters.uf as string;
  const city = filters.city as string;

  const searchDeliveryman = new SearchDeliverymanService();

  const deliveryman = await searchDeliveryman.execute({ uf, city });

  deliveryman.map(eachDeliveryman => delete eachDeliveryman.password);

  return response.json(deliveryman);
});

export default deliverymanRouter;
