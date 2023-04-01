import { ErrorStatusCodes, ErrorCodes } from '../../utils/Constant';
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
export class TokenMissingException extends BaseException {
  constructor(
    messsage: string,
    statusCode: number = ErrorStatusCodes.TokenMissingException,
    errorCode: number = ErrorCodes.TokenExpiredException,
  ) {
    super(messsage, statusCode, errorCode);
  }
}
export class TokenVerificationException extends BaseException {
  constructor(
    messsage: string,
    statusCode: number = ErrorStatusCodes.TokenVerificationException,
    errorCode: number = ErrorCodes.TokenVerificationException,
  ) {
    super(messsage, statusCode, errorCode);
  }
}
export class UnauthorizedException extends BaseException {
  constructor(
    messsage: string,
    statusCode: number = ErrorStatusCodes.UnauthorizedException,
    errorCode: number = ErrorCodes.UnauthorizedException,
  ) {
    super(messsage, statusCode, errorCode);
  }
}
export class BadRequestException extends BaseException {
  constructor(
    messsage: string,
    statusCode: number = ErrorStatusCodes.BadRequest,
    errorCode: number = ErrorCodes.BadRequest,
  ) {
    super(messsage, statusCode, errorCode);
  }
}
