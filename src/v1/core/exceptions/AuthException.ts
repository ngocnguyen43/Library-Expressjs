import { ErrorStatusCodes } from '../../utils/enums';

class AuthException extends Error {
  private status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}
export class InvalidCredentialsException extends AuthException {
  constructor(message: string, status: number = ErrorStatusCodes.CreateFailedException) {
    super(message, status);
  }
}
