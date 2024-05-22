import express from 'express';
import { uploadAvatar } from '../controllers/userControllers.js';

const router = express.Router();

router.patch('/avatar', uploadAvatar);

export default router;
