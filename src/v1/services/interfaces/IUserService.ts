import { IBaseService } from './IBaseService';

import { User } from '../../core/models/user.model';
import { UserDTO } from './../../core/dtos/UserDto';
export interface IUserService extends IBaseService<UserDTO> {
  getAllUsers(): Promise<User[] | null>;
}
