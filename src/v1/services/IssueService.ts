import { id } from 'date-fns/locale';
import BooksModel from '../core/models/books.model';
import IssuesModel from '../core/models/issues.model';
import UsersModel from '../core/models/users.model';
import { OK } from '../core/response';
import {
  NotFoundException,
  UnexpectedException,
  CreateFailedException,
  UpdateFailedException,
} from './../core/exceptions/DatabaseException';
import { Types, ObjectId } from 'mongoose';

export class IssueService {
  static createIssue = async (userId: string, bookId: string) => {
    try {
      console.log({ userId, bookId });

      const book = await BooksModel.findById(bookId);
      const user = await UsersModel.findById(userId);
      console.log({ book, user });

      if (!book || !user) throw new NotFoundException('Not Found User or Book');
      if (book.stock === 0) throw new UnexpectedException('Somethings went wrong');
      book.stock -= 1;
      const Issue = new IssuesModel({
        book_info: {
          id: book._id,
          title: book.title,
          author: book.author,
          ISBN: book.ISBN,
          category: book.category,
          stock: book.stock,
        },
        user_id: {
          id: user._id,
          email: user.email,
        },
      });
      user.bookIssues.push(Issue.book_info.id);

      await Issue.save();
      await book.save();
      await user.save();
      return new OK('Issue Successfully');
    } catch (error: any) {
      console.log(error);

      if (error instanceof NotFoundException) throw new NotFoundException(error.message);
      if (error instanceof UnexpectedException) throw new UnexpectedException(error.message);
      else throw new CreateFailedException('Create Issue Failed');
    }
  };
  //authorization
  static renewBook = async (userId: string, issueId: string) => {
    try {
      const __issueId = new Types.ObjectId(issueId);
      const __userId = new Types.ObjectId(userId);
      const user = await UsersModel.findOne({ _id: __userId });
      const issue = await IssuesModel.findOne({ _id: __issueId });
      if (!user || !issue) throw new NotFoundException('Not Found  Issue');

      await IssuesModel.findByIdAndUpdate(issueId, {
        $set: { 'book_info.isRenewed': true, 'book_info.returnDate': Date.now() + 7 * 24 * 60 * 60 * 1000 },
        $push: { 'book_info.renewDate': Date.now() },
      });
      return new OK('Renew Successfully');
    } catch (error) {
      if (error instanceof NotFoundException) throw new NotFoundException(error.message);
      if (error instanceof UnexpectedException) throw new UnexpectedException(error.message);
      else throw new UpdateFailedException('Update Issue Failed');
    }
  };
  static returnBook = async (userId: string, issueId: string) => {
    try {
      const __issueId = new Types.ObjectId(issueId);
      const issue = await IssuesModel.findOneAndDelete({ _id: __issueId });
      const bookId = issue.book_info.id;
      await BooksModel.findByIdAndUpdate(bookId, { $inc: { stock: 1 } });
      return new OK('Return Successfully');
    } catch (error) {
      throw new UpdateFailedException('Return Book Failed');
    }
  };
}
