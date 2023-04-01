export class BaseException extends Error {
  public statusCode: number;
  public errorCode: number;
  constructor(message: string, statusCode: number, errorCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}
