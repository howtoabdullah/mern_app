import { Router } from 'express';

import * as playerController from '../controllers/playerControllers';

const routes = Router();

routes.post('/create', playerController.createPlayer);
routes.get('/list', playerController.getPlayers);
routes.get('/detail/:id', playerController.getPlayerById);
routes.put('/update/:id', playerController.updatePlayer);
routes.delete('/delete/:id', playerController.deletePlayer);

export default routes;
