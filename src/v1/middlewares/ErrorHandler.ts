import { Request, Response, NextFunction } from 'express';
import { logEvents } from './../helpers/WriteLogs';
import { createId } from '@paralleldrive/cuid2';

type middleware = (req: Request, res: Response, next?: NextFunction) => Promise<any>;

export const ErrorHandler = (fn: middleware): any => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await fn(req, res, next).catch(next);
  };
};
