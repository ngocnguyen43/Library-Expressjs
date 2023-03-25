import { ValidationChain, body } from 'express-validator';

export const ValidateIssue: Array<ValidationChain> = [
  body(['userId', 'bookId'])
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
export const ValidateRenewIssue: Array<ValidationChain> = [
  body(['userId', 'issueId'])
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
export const ValidateReturn: Array<ValidationChain> = [
  body(['userId', 'issueId'])
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
