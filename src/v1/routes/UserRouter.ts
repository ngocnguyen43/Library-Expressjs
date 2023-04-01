/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express';
import { UserController } from './../controllers/UserController';
import { ErrorHandler } from '../helpers/ErrorHandler';
export const router = Router();
router.get('/users', ErrorHandler(UserController.getAllUser));
router.get('/users/:id', ErrorHandler(UserController.getUserById));
router.get('/user/issues', ErrorHandler(UserController.findAllIssues));
router.patch('/user/issue', ErrorHandler(UserController.returnIssue));
