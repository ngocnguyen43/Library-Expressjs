export interface Message {
  message: string;
  statuscode: number;
  data?: object;
  pagination?: any;
}
class ResponseMessage implements Message {
  // private message: string;
  // private statuscode: number;
  // private data?: object;
  // private pagination?: any;
  message: string;
  statuscode: number;
  data?: object;
  pagination?: any;
  constructor(message: string, statuscode: number, data?: object, pagination?: object) {
    this.message = message;
    this.statuscode = statuscode;
    data ? (this.data = data) : null;
    pagination ? (this.pagination = pagination) : null;
  }
}
export class OK extends ResponseMessage {
  constructor(message: string, statuscode = 200, data?: object) {
    super(message, statuscode, data);
  }
}

export class CREATED extends ResponseMessage {
  constructor(message: string, statuscode = 201) {
    super(message, statuscode);
  }
}
