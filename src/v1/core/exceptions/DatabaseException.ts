import { ErrorCodes, ErrorStatusCodes } from '../../utils/enums';
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
