/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express';
import { BookController } from '../controllers/BookController';
import { ErrorHandler } from './../middlewares/ErrorHandler';
export const router = Router();

router.get('/books', ErrorHandler(BookController.getBooks));
//Middleware check validate
router.post('/book', ErrorHandler(BookController.createBook));
router.patch('/book', ErrorHandler(BookController.updateBook));
router.delete('/book', ErrorHandler(BookController.deleteBook));
