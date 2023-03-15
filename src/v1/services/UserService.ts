/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import UserModel from '../core/models/users.model';

import { Message, OK } from './../core/response/index';
import { NotFoundException } from './../core/exceptions/DatabaseException';
import { isValidObjectId } from 'mongoose';
export class UserService {
  static findAll = async (): Promise<Message> => {
    const user = await UserModel.find({}, '-password -__v').lean();
    return new OK('Ok', 200, user);
  };
  static findById = async (id: string) => {
    if (!isValidObjectId(id)) {
      throw new NotFoundException('User Not Found');
    }
    const user = (await UserModel.findById(id).lean()) || null;
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return new OK('Ok', 200, user);
  };
}
