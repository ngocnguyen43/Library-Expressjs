import { NextFunction, Request, Response } from 'express';
import { UserDTO } from './../core/dtos/UserDto';
import { UserLoginDTO } from './../core/dtos/UserLoginDTO';
import { AuthService } from './../services/AuthService';

class AuthController {
  static registerUser = async (req: Request, res: Response, next: NextFunction) => {
    // const response = await UserService.SignUp(req.body as UserDTO);
    return res.status(201).json(await AuthService.SignUp(req.body as UserDTO));
  };
  static signinUser = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await AuthService.SignIn(req.body as UserLoginDTO));
  };
}
export default AuthController;
