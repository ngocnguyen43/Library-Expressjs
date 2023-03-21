import { Response, Request, NextFunction } from 'express';
import { UserService } from './../services/UserService';
export class UserController {
  static getAllUser = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await UserService.findAll());
  };
  static getUserById = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await UserService.findById(req.params.id));
  };
  static findAllIssues = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await UserService.findAllIssues(req.body.id as string));
  };
  static returnIssue = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await UserService.returnIssue(req.body.id as string));
  };
}
