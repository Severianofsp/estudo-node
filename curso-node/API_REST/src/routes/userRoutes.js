import { Router } from 'express';
import userController from '../controllers/UserController';
import validator from '../middlewares/validator';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', validator, userController.update);
router.delete('/', validator, userController.delete);

export default router;
