import { Router } from 'express';

import fotoController from '../controllers/FotoController';
import validator from '../middlewares/validator';

const router = new Router();

router.post('/', validator, fotoController.store);

export default router;
