import UserModel from './../core/models/user.model';
import { UserDTO } from './../core/dtos/UserDto';
import { HashPassword } from './../utils/HashPassword';
import { UserLoginDTO } from '../core/dtos/UserLoginDTO';
import { ComparePassword } from '../utils/ComparePassword';
import { DuplicateEntryException, NotFoundException } from '../core/exceptions/DatabaseException';
import { InvalidCredentialsException } from '../core/exceptions/AuthException';
import ResponseMessage from './../core/response/index';
class UserService {
  static SignUp = async (data: UserDTO): Promise<ResponseMessage> => {
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
  static SignIn = async (data: UserLoginDTO): Promise<ResponseMessage> => {
    const user = await UserModel.findOne({ email: data.email }).lean();
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    const compare = await ComparePassword(data.password, user.password);
    if (!compare) {
      throw new InvalidCredentialsException('Incorrect  password');
    }
    return new ResponseMessage('Login Success');
  };
}
export default UserService;
