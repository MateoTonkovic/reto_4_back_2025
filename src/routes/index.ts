import { Router } from 'express';
import authRouter from './auth';
import registroRouter from './blog';

const router = Router();
router.use('/auth', authRouter);
router.use('/registros', registroRouter);

export default router;