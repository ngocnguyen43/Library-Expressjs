import UserModel from './../core/models/user.model';
import { UserDTO } from './../core/dtos/UserDto';
import { HashPassword } from './../utils/HashPassword';
import { UserLoginDTO } from '../core/dtos/UserLoginDTO';
import { ComparePassword } from '../utils/ComparePassword';
import { DuplicateEntryException, NotFoundException } from '../core/exceptions/DatabaseException';
import { InvalidCredentialsException } from '../core/exceptions/AuthException';
class UserService {
  static SignUp = async (data: UserDTO): Promise<{ message: string; status: number }> => {
    const email = data.email;
    const isExisted = await UserModel.findOne({ email }).lean();
    if (isExisted) {
      throw new DuplicateEntryException('User is Existed');
    }
    const hashed = await HashPassword(data.password);

    await UserModel.create({
      name: data.name,
      email: data.email,
      password: hashed,
      roles: ['user'],
    });
    return this.SignIn(data as UserLoginDTO);
  };
  static SignIn = async (data: UserLoginDTO): Promise<{ message: string; status: number }> => {
    const user = await UserModel.findOne({ email: data.email }).lean();
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    const compare = await ComparePassword(data.email, user.password);
    if (!compare) {
      throw new InvalidCredentialsException('Incorrect email or password');
    }
    return { message: 'Successs', status: 200 };
  };
}
export default UserService;
