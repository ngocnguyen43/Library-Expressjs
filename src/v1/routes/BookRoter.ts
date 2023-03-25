/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express';
import { BookController } from '../controllers/BookController';
import { ErrorHandler } from '../helpers/ErrorHandler';
import { auth } from './../middlewares/Auth.middleware';
import { ValidateBook, ValidateDeleteBook, ValidateUpdatedBook } from '../middlewares/validations/BookValidator';
export const router = Router();

router.get('/books', auth(), ErrorHandler(BookController.getBooks));
//Middleware check validate
router.post('/book', ValidateBook, ErrorHandler(BookController.createBook));
router.patch('/book', ValidateUpdatedBook, ErrorHandler(BookController.updateBook));
router.delete('/book', ValidateDeleteBook, ErrorHandler(BookController.deleteBook));
