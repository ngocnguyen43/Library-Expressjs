import { ErrorCodes, ErrorStatusCodes } from '../../utils/Constant';
import { BaseException } from './BaseException';

export class InternalServerException extends BaseException {}
export class InvalidEndpointEcxeption extends BaseException {
  constructor(
    message = 'URL not found',
    statuscode: number = ErrorStatusCodes.InvalidEndpointException,
    errorCode: number = ErrorCodes.InvalidEndpointException,
  ) {
    super(message, statuscode, errorCode);
  }
}
export class UnimplementedException extends BaseException {}
