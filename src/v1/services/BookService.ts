import { bookFilter } from '../controllers/BookController';
import BooksModel from './../core/models/books.model';
import { PER_PAGE } from '../utils/Constant';
import {
  CreateFailedException,
  NotFoundException,
  UpdateFailedException,
} from './../core/exceptions/DatabaseException';
import { OK, CREATED } from '../core/response';
import { BookDto } from './../core/dtos/BookDto';
import { randomUUID } from 'crypto';
export class BookService {
  static findBooks = async (filter: bookFilter, page: number) => {
    const total = await BooksModel.count(filter);
    const books = await BooksModel.find(filter, '-__v -createdAt -updatedAt')
      .limit(PER_PAGE)
      .skip(page > 0 ? (page - 1) * PER_PAGE : 0)
      .lean();

    if (books.length == 0) throw new NotFoundException('No Books Found');

    return new OK('ok', 200, books, { totalpages: Math.ceil(total / PER_PAGE) });
  };
  static createBook = async (data: BookDto): Promise<CREATED> => {
    try {
      await BooksModel.create({
        title: data.title,
        ISBN: randomUUID(),
        author: data.author,
        description: data.description,
        category: data.category,
        stock: data.stock,
      });
    } catch (error) {
      throw new CreateFailedException('Create Book Failed');
    }
    return new CREATED('Create Successfully');
  };
  static updateBook = async (data: BookDto) => {
    try {
      await BooksModel.findOneAndUpdate({ _id: data._id }, data);
    } catch (error) {
      throw new UpdateFailedException('Update Book Failed');
    }
    return new OK('Update Successfully');
  };
  static deleteBook = async (id: string) => {
    try {
      await BooksModel.findByIdAndDelete(id);
    } catch (error) {
      throw new UpdateFailedException('Delete Book Failed');
    }
    return new OK('Update Successfully');
  };
}
