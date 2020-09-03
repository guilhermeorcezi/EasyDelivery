import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateDeliveryService from '../services/CreateDeliveryService';

const deliveryRouter = Router();

deliveryRouter.post('/', ensureAuthenticated, async (request, response) => {
  const { service_id, description, deliveryman_id } = request.body;
  const user_id = request.user.id;

  const createDelivery = new CreateDeliveryService();

  const delivery = createDelivery.execute({
    service_id,
    description,
    deliveryman_id,
    user_id,
  });

  return response.json(delivery);
});

export default deliveryRouter;
