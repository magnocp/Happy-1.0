import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import OrfanagesControllers from './controllers/OrfanagesControllers';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrfanagesControllers.index);
routes.get('/orphanages/:id', OrfanagesControllers.show);
routes.post('/orphanages', upload.array('images'), OrfanagesControllers.create);

export default routes;
