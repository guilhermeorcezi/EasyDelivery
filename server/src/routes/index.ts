import { Router } from 'express';

import usersRouter from './users.routes';
import deliverymanRouter from './deliveryman.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/deliveryman', deliverymanRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
