import { ErrorStatusCodes, ErrorCodes } from '../../utils/enums';
import { BaseException } from './BaseException';

export class InvalidCredentialsException extends BaseException {
  constructor(
    message: string,
    statusCode: number = ErrorStatusCodes.InvalidCredentialsException,
    errorCode: number = ErrorCodes.InvalidCredentialsException,
  ) {
    super(message, statusCode, errorCode);
  }
}
