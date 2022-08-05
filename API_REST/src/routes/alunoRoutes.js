import { Router } from 'express';

import alunoController from '../controllers/AlunoController';
import validator from '../middlewares/validator';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', validator, alunoController.store);
router.get('/:id', validator, alunoController.show);
router.put('/:id', validator, alunoController.update);
router.delete('/:id', validator, alunoController.delete);

export default router;
