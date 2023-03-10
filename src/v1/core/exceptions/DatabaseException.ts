import { ErrorStatusCodes } from '../../utils/enums';

class DatabaseException extends Error {
  private status: number;
  private errorcode: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}
export class NotFoundException extends DatabaseException {
  constructor(message: string, status: number = ErrorStatusCodes.NotFoundException) {
    super(message, status);
  }
}
export class DuplicateEntryException extends DatabaseException {
  constructor(message: string, status: number = ErrorStatusCodes.DuplicateEntryException) {
    super(message, status);
  }
}
