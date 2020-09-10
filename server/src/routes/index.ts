import { Router } from 'express';

import usersRouter from './users.routes';
import deliverymanRouter from './deliveryman.routes';
import sessionsRouter from './sessions.routes';
import deliveryRouter from './delivery.routes';
import servicesRouter from './services.routes';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/deliveryman', deliverymanRouter);
routes.use('/delivery', deliveryRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/services', servicesRouter);

export default routes;
