import { Request, Response, NextFunction } from 'express';
import { logEvents } from './WriteLogs';
import { createId } from '@paralleldrive/cuid2';
import { validationResult } from 'express-validator';
import { InvalidPropertiesException } from './../core/exceptions/ValidateException';

type middleware = (req: Request, res: Response, next?: NextFunction) => Promise<any>;

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
export const checkValidation = async (req: Request) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    for (let i = 0; i < errors.array().length; i++) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      await logEvents(`ERROR---------${createId()}-------${req.url}-------${req.method}------${errors.array()[i].msg}`);
    }
    throw new InvalidPropertiesException('Missing or invalid properties');
  }
};
