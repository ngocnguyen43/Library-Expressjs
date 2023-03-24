import { ValidationChain, body, check } from 'express-validator';

export const ValidateLogin: ValidationChain[] = [
  body('email')
    .trim()
    .exists()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email is invalid')
    .normalizeEmail(),
  body('password').trim().exists().withMessage('Password is required').notEmpty().withMessage('Password is required'),
  //   check('email')
  //     .trim()
  //     .exists()
  //     .custom(() => {
  //       throw new NotFoundException('ABC');
  //     }),
];
export const ValidateSignin: ValidationChain[] = [
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
