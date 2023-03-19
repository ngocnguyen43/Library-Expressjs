export interface Message {
  message: string;
  statusCode: number;
  pagination?: any;
  data?: object;
}
class ResponseMessage implements Message {
  // private message: string;
  // private statuscode: number;
  // private data?: object;
  // private pagination?: any;
  message: string;
  statusCode: number;
  pagination?: any;
  data?: object;
  constructor(message: string, statuscode: number, data?: object, pagination?: object) {
    this.message = message;
    this.statusCode = statuscode;
    data ? (this.data = data) : null;
    pagination ? (this.pagination = pagination) : null;
  }
}
export class OK extends ResponseMessage {
  constructor(message: string, statuscode = 200, data?: object, pagination?: object) {
    super(message, statuscode, data, pagination);
  }
}

export class CREATED extends ResponseMessage {
  constructor(message: string, statuscode = 201) {
    super(message, statuscode);
  }
}
