import { ErrorCodes, ErrorStatusCodes } from '../../utils/Constant';
import { BaseException } from './BaseException';

export class NotFoundException extends BaseException {
  constructor(
    message: string,
    statusCode: number = ErrorStatusCodes.NotFoundException,
    errorCode: number = ErrorCodes.NotFoundException,
  ) {
    super(message, statusCode, errorCode);
  }
}
export class DuplicateEntryException extends BaseException {
  constructor(
    message: string,
    statusCode: number = ErrorStatusCodes.DuplicateEntryException,
    errorCode: number = ErrorCodes.DuplicateEntryException,
  ) {
    super(message, statusCode, errorCode);
  }
}
export class CreateFailedException extends BaseException {
  constructor(
    message: string,
    statuscode: number = ErrorStatusCodes.CreateFailedException,
    errorCode: number = ErrorCodes.CreateFailedException,
  ) {
    super(message, statuscode, errorCode);
  }
}
export class UpdateFailedException extends BaseException {
  constructor(
    message: string,
    statusCode = ErrorStatusCodes.UpdateFailedException,
    errorCode = ErrorCodes.UpdateFailedException,
  ) {
    super(message, statusCode, errorCode);
  }
}
export class UnexpectedException extends BaseException {
  constructor(
    message: string,
    statuscode: number = ErrorStatusCodes.UnexpectedException,
    errorcode = ErrorCodes.UnauthorizedException,
  ) {
    super(message, statuscode, errorcode);
  }
}
