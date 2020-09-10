import { Router } from 'express';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Service from '../models/Service';

const servicesRouter = Router();

servicesRouter.get('/', ensureAuthenticated, async (request, response) => {
  const servicesRepository = getRepository(Service);

  const services = await servicesRepository.find();

  response.json(services);
});

export default servicesRouter;
