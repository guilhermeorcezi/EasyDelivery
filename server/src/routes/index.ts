import express from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = express.Router();

routes.post('/user', usersRouter);
routes.post('/sessions', sessionsRouter);

export default routes;
