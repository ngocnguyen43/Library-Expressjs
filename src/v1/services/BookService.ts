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
    const options = {
      ...(filter.category && { category: filter.category }),
      ...(filter.title && { title: { $regex: filter.title, $options: 'i' } }),
    };
    const books = await BooksModel.find(options, '-__v -createdAt -updatedAt')
      .sort({ createdAt: -1 })
      .limit(PER_PAGE)
      .skip(page > 0 ? (page - 1) * PER_PAGE : 0)
      .lean();

    if (books.length == 0) throw new NotFoundException('No Books Found');

    return new OK('ok', 200, books, { totalpages: Math.ceil(total / PER_PAGE), currentpage: page + 1 });
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
  static countAllBook = async () => {
    const total = await BooksModel.count();
    return new OK('OK', 200, { total: total });
  };
}
