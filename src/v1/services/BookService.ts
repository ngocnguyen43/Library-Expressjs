import { bookFilter } from '../controllers/BookController';
import BooksModel, { IBook } from './../core/models/books.model';
import { PER_PAGE } from '../utils/Constant';
import { CreateFailedException, NotFoundException } from './../core/exceptions/DatabaseException';
import { OK } from '../core/response';
import { BookDto } from './../core/dtos/BookDto';
import { randomUUID } from 'crypto';
export class BookService {
  static findBooks = async (filter: bookFilter, page: number) => {
    const books = await BooksModel.find(filter)
      .skip(page * PER_PAGE - PER_PAGE)
      .limit(PER_PAGE)
      .lean();
    if (!books.length) throw new NotFoundException('No Books Found');
    return new OK('ok', 200, books);
  };
  static createBook = async (data: BookDto) => {
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
      throw new CreateFailedException('Add Book Failed');
    }
    return new OK('Create Successfully', 201);
  };
}
