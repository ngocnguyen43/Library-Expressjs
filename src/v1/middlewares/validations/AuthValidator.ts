import { ValidationChain, body } from 'express-validator';

export const ValidateLogin: Array<ValidationChain> = [
  body('email')
    .trim()
    .exists()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email is invalid')
    .normalizeEmail(),
  body('password').trim().exists().withMessage('Password is required').notEmpty().withMessage('Password is required'),
];
export const ValidateSignin: Array<ValidationChain> = [
  body('name').trim().exists().withMessage('Your Name is Required'),
  body('email')
    .trim()
    .exists()
    .withMessage('Email is Required')
    .isEmail()
    .withMessage('Email is Invalid')
    .normalizeEmail(),
  body('password').trim().exists().withMessage('Password is required').notEmpty(),
  body('status').trim().isIn(['active', 'inactive']).optional(),
];
