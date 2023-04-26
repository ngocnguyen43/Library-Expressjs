/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import UserModel from '../core/models/users.model';
import { UserDTO } from './../core/dtos/UserDto';
import { Message, OK } from './../core/response/index';
import { HashPassword } from './../utils/HashPassword';
import { UserLoginDTO } from './../core/dtos/UserLoginDTO';
import { NotFoundException, DuplicateEntryException } from './../core/exceptions/DatabaseException';
import { ComparePassword } from './../utils/ComparePassword';
import { InvalidCredentialsException } from './../core/exceptions/AuthException';
import { JwtGenerator } from '../utils/JwtGenerator';
export class AuthService {
  static SignUp = async (data: UserDTO): Promise<Message> => {
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
  static SignIn = async (data: UserLoginDTO): Promise<Message> => {
    const user = (await UserModel.findOne({ email: data.email }).lean()) || null;

    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    const compare = await ComparePassword(data.password, user.password);
    if (!compare) {
      throw new InvalidCredentialsException('Incorrect  password');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const token = JwtGenerator(user._id.toString(), user.email, user.roles[0]);
    return new OK('Success', 200, { role: user.roles[0], token: token, id: user._id });
  };
}
// export default AuthService;
