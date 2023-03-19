/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express';
import { ErrorHandler } from '../middlewares/ErrorHandler';
import { IssueController } from './../controllers/IssueController';

export const router = Router();
router.post('/issue', ErrorHandler(IssueController.createIssue));
router.patch('/issue', ErrorHandler(IssueController.renewIssue));
router.delete('/issue', ErrorHandler(IssueController.returnBook));
