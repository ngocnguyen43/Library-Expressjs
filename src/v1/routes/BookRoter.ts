/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express';
import { BookController } from '../controllers/BookController';
import { ErrorHandler } from './../middlewares/ErrorHandler';
export const router = Router();
router.get('/books', ErrorHandler(BookController.getBooks));
router.post('/book', ErrorHandler(BookController.createBook));
