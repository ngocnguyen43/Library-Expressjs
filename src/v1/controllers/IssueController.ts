import { Request, Response, NextFunction } from 'express';
import { IssueService } from './../services/IssueService';
import { UserId, BookId, IssueId } from '../core/dtos/StateDto';
export class IssueController {
  static createIssue = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await IssueService.createIssue(req.body.userId as string, req.body.bookId as string));
  };
  static renewIssue = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(201).json(await IssueService.renewBook(req.body.userId as string, req.body.issueId as string));
  };
}
