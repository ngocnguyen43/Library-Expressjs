/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import UserModel from '../core/models/users.model';

import { Message, OK } from './../core/response/index';
import { NotFoundException } from './../core/exceptions/DatabaseException';
import { isValidObjectId } from 'mongoose';
import issuesModel from '../core/models/issues.model';
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
  static findAllIssues = async (id: string) => {
    if (!isValidObjectId(id)) throw new NotFoundException('User not found');
    const isExist = await UserModel.findById(id).lean();
    if (!isExist) throw new NotFoundException('User not found');
    const issues = await issuesModel.find({ 'user_id.id': id }, '-user_id').lean();
    return new OK('OK', 200, issues);
  };
  static returnIssue = async (id: string) => {
    if (!isValidObjectId(id)) throw new NotFoundException('Issue not found');
  };
}
