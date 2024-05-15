import express from 'express';

import authRoutes from './authRouter.js';
import bookRoutes from './contactsRouter.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/books', bookRoutes);

export default router;
