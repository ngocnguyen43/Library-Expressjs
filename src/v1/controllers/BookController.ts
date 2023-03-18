/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextFunction, Request, Response } from 'express';
import { BookService } from './../services/BookService';
import { BookDto } from './../core/dtos/BookDto';

export type bookFilter = {
  category?: string;
  title?: string;
};
export class BookController {
  static getBooks = async (req: Request, res: Response, next: NextFunction) => {
    const page = parseInt(req.params.page) | 1;
    const category = req.query.category?.toString();
    const title = req.query.title?.toString();
    const filter: bookFilter = {};
    if (title !== undefined) {
      filter.title = title;
    }
    if (category !== undefined) {
      filter.category = category;
    }
    console.log(filter);
    return res.status(200).json(await BookService.findBooks(filter, page));
  };
  static createBook = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await BookService.createBook(req.body as BookDto));
  };
}
