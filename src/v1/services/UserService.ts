import { UserDTO } from '../core/dtos/UserDto';
import { User } from '../core/models/user.model';
import { IUserService } from './interfaces/IUserService';
class UserService implements IUserService {
  getAllUsers(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  exists = (t: UserDTO): Promise<boolean> => {
    throw new Error('Method not implemented.');
  };
  delete(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<UserDTO> {
    throw new Error('Method not implemented.');
  }
  save(t: UserDTO): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
export default UserService;
