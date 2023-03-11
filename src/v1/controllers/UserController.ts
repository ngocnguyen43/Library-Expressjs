import { Response, Request, NextFunction } from 'express';
import { UserService } from './../services/UserService';
export class UserController {
  static getAllUser = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await UserService.findAll());
  };
  static getUserById = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await UserService.findById(req.params.id));
  };
}
