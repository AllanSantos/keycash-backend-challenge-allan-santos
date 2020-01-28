import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ImovelController from './app/controllers/ImovelController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware)

routes.put('/users', UserController.update);
routes.post('/imoveis', ImovelController.store);
routes.put('/imoveis/:userId', ImovelController.update);
routes.get('/imoveis', ImovelController.index);


export default routes;