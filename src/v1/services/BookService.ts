import { bookFilter } from '../controllers/BookController';
import BooksModel, { IBook } from './../core/models/books.model';
import { PER_PAGE } from '../utils/Constant';
import { NotFoundException } from './../core/exceptions/DatabaseException';
import { OK } from '../core/response';
export class BookService {
  static findBooks = async (filter: bookFilter, page: number) => {
    const books = await BooksModel.find(filter)
      .skip(page * PER_PAGE - PER_PAGE)
      .limit(PER_PAGE);
    if (!books.length) throw new NotFoundException('No Books Found');
    return new OK('ok', 200, books);
  };
  static createBook = async () => {};
}
