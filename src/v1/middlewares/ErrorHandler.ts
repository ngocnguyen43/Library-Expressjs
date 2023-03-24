import { Request, Response, NextFunction } from 'express';
import { logEvents } from './../helpers/WriteLogs';
import { createId } from '@paralleldrive/cuid2';
import { validationResult } from 'express-validator';

type middleware = (req: Request, res: Response, next?: NextFunction) => Promise<any>;

// export const ValidatorInput = (req: Request, res: Response, next?: NextFunction): middleware => {
//   const result = validationResult(req);
//   if(!res){
//     throw new
//   }
// };
export const ErrorHandler = (fn: middleware): any => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await fn(req, res, next).catch(next);
  };
};
export const handleInputsErrors = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    for (let i = 0; i < errors.array().length; i++) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      await logEvents(`ERROR---------${createId()}-------${req.url}-------${req.method}------${errors.array()[i].msg}`);
    }
    return res.status(401).json({
      error: errors.array(),
    });
  }
  next();
};
