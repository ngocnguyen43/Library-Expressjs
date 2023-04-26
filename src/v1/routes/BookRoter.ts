/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express';
import { BookController } from '../controllers/BookController';
import { ErrorHandler } from '../helpers/ErrorHandler';
import { auth } from './../middlewares/Auth.middleware';
import { ValidateBook, ValidateDeleteBook, ValidateUpdatedBook } from '../middlewares/validations/BookValidator';
export const router = Router();

router.get('/books', ErrorHandler(BookController.getBooks));
//Middleware check validate
router.post('/book', auth('admin'), ValidateBook, ErrorHandler(BookController.createBook));
router.patch('/book', auth('admin'), ValidateUpdatedBook, ErrorHandler(BookController.updateBook));
router.delete('/book', auth('admin'), ValidateDeleteBook, ErrorHandler(BookController.deleteBook));
router.get('/books/all', ErrorHandler(BookController.countAllBooks));
