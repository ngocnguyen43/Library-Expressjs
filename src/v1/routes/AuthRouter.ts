/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express';
import { ErrorHandler, handleInputsErrors } from '../helpers/ErrorHandler';
import AuthController from '../controllers/AuthController';
import { ValidateLogin, ValidateSignin } from './../middlewares/validations/AuthValidator';

export const router = Router();
router.post('/register', ValidateSignin, handleInputsErrors, ErrorHandler(AuthController.registerUser));
router.post('/login', ValidateLogin, handleInputsErrors, ErrorHandler(AuthController.signinUser));

// export default router;
