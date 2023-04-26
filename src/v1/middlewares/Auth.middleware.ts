import { NextFunction, Request, Response } from 'express';
import { TokenMissingException, BadRequestException } from '../core/exceptions/AuthException';
import { JwtDecode } from '../utils/JwtGenerator';
import { log } from 'console';
interface IUserRequest {
  userId: string;
  email: string;
  role: string;
  iat: number;
}
interface IRequest extends Request {
  user: IUserRequest;
}
const CLIENT_ID = 'x-client-id';
export const auth = (...roles: string[]) => {
  return (req: IRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const bearer = 'Bearer';

    if (!req.headers[CLIENT_ID]) throw new BadRequestException('Bad Request');
    if (!authHeader || !authHeader.startsWith(bearer)) {
      throw new TokenMissingException('Missing Token');
    }
    const [, token] = authHeader.split(' ');

    const user = JwtDecode(token, roles[0]) as IUserRequest;
    req.user = user;
    next();
  };
};
