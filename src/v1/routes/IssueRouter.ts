/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express';
import { ErrorHandler } from '../helpers/ErrorHandler';
import { IssueController } from './../controllers/IssueController';
import { ValidateIssue, ValidateRenewIssue, ValidateReturn } from './../middlewares/validations/IssueValidator';

export const router = Router();
router.post('/issue', ValidateIssue, ErrorHandler(IssueController.createIssue));
router.patch('/issue', ValidateRenewIssue, ErrorHandler(IssueController.renewIssue));
router.delete('/issue', ValidateReturn, ErrorHandler(IssueController.returnBook));
