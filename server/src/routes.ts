import express from 'express';

import MotoboyController from './controllers/MotoboyController';
import UserController from './controllers/UserController';
import DeliveriesController from './controllers/DeliveriesController';
import FavoritesController from './controllers/FavoritesController';

const routes = express.Router();

const motoboyController = new MotoboyController();
const userController = new UserController();
const deliveriesController = new DeliveriesController();
const favoritesController = new FavoritesController();

routes.post('/user', userController.create);

routes.get('/motoboys', motoboyController.index);

routes.post('/favorite', favoritesController.create);
routes.delete('/favorite', favoritesController.remove);

routes.post('/delivery/:id', deliveriesController.create);

export default routes;
