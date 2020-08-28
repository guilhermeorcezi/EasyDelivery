import express from 'express';

import usersRouter from './users.routes';

const routes = express.Router();

routes.post('/user', usersRouter);

export default routes;
