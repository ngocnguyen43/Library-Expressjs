export default class ResponseMessage {
  private message: string;
  private statuscode: number;
  private data?: object;
  private pagination?: any;
  constructor(message: string, statuscode = 200, data?: object, pagination?: object) {
    this.message = message;
    this.statuscode = statuscode;
    data ? (this.data = data) : null;
    pagination ? (this.pagination = pagination) : null;
  }
}
