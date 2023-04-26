import { Request, Response, NextFunction } from 'express';
import { IssueService } from './../services/IssueService';
import { checkValidation } from './../helpers/ErrorHandler';

export class IssueController {
  static createIssue = async (req: Request, res: Response, next: NextFunction) => {
    await checkValidation(req);
    return res.status(200).json(await IssueService.createIssue(req.body.userId as string, req.body.bookId as string));
  };
  static renewIssue = async (req: Request, res: Response, next: NextFunction) => {
    await checkValidation(req);
    return res.status(201).json(await IssueService.renewBook(req.body.userId as string, req.body.issueId as string));
  };
  static returnBook = async (req: Request, res: Response, next: NextFunction) => {
    await checkValidation(req);
    return res.status(200).json(await IssueService.returnBook(req.body.userId as string, req.body.issueId as string));
  };
  static getAllIssue = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await IssueService.getAllIssues(req.query.page as string | null));
  };
  static countAllIssues = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await IssueService.countAllIssues());
  };
}
