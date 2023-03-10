import { Request, Response, NextFunction } from 'express';

type middleware = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const ErrorHandler = (fn: middleware): any => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
