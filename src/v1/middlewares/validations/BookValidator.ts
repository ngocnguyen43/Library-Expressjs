// export const
import { ValidationChain, body } from 'express-validator';
export const ValidateBook: Array<ValidationChain> = [
  body(['title', 'author', 'description', 'category'])
    .trim()
    .isString()
    .withMessage('Invalid infomation input')
    .exists()
    .withMessage('Book Infomation is Required')
    .notEmpty()
    .withMessage('Book Infomation is Required'),
  body('stock').isInt({ min: 1 }).withMessage("Invalid Book's Stock"),
];
export const ValidateUpdatedBook: Array<ValidationChain> = [
  body('_id')
    .trim()
    .isString()
    .withMessage('Invalid Book Id Format')
    .exists()
    .withMessage("Book's Id is Required")
    .notEmpty()
    .withMessage("Book's Id is Required")
    .isLength({ min: 24, max: 24 })
    .withMessage('Invalid Book Id'),
  body(['title', 'author', 'description', 'category'])
    .optional()
    .trim()
    .isString()
    .withMessage('Invalid infomation input')
    .exists()
    .withMessage('Book Infomation is Required')
    .notEmpty()
    .withMessage('Book Infomation is Required'),
  body('stock').optional().isInt({ min: 1 }).withMessage("Invalid Book's Stock"),
];
export const ValidateDeleteBook: Array<ValidationChain> = [
  body('_id')
    .trim()
    .isString()
    .withMessage('Invalid Id Format')
    .exists()
    .withMessage("Book's Id is Required")
    .notEmpty()
    .withMessage("Book's Id is Required")
    .isLength({ min: 24, max: 24 })
    .withMessage('Invalid Id'),
];
