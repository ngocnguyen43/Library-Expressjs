import { NextFunction, Request, Response } from 'express';
import { TokenMissingException, BadRequestException } from '../core/exceptions/AuthException';

const CLIENT_ID = 'x-client-id';
export const auth = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const bearer = 'Bearer';

    if (!req.headers[CLIENT_ID]) throw new BadRequestException('Bad Request');
    if (!authHeader || !authHeader.startsWith(bearer)) {
      throw new TokenMissingException('Missing Token');
    }
    const token = authHeader.replace(bearer, '');

    next();
  };
};
