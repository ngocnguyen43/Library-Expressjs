/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express';
import { ErrorHandler } from './../middlewares/ErrorHandler';
import AuthController from '../controllers/AuthController';

export const router = Router();
router.post('/register', ErrorHandler(AuthController.registerUser));
router.post('/login', ErrorHandler(AuthController.signinUser));

// export default router;
