import { ErrorCodes, ErrorStatusCodes } from '../../utils/Constant';
import { BaseException } from './BaseException';

export class InvalidPropertiesException extends BaseException {
  constructor(
    messsage: string,
    statusCode: number = ErrorStatusCodes.InvalidPropertiesException,
    errorCode: number = ErrorCodes.InvalidPropertiesException,
  ) {
    super(messsage, statusCode, errorCode);
  }
}
