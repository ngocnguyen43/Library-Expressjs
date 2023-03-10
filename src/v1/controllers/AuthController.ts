import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';
import { UserDTO } from './../core/dtos/UserDto';

class AuthController {
  static reigisterUser = async (req: Request, res: Response, next: NextFunction) => {
    // const response = await UserService.SignUp(req.body as UserDTO);
    return res.status(201).json(await UserService.SignUp(req.body as UserDTO));
  };
}
export default AuthController;
