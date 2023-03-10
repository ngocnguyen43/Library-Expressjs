class EndpointException extends Error {
  constructor(code, messgae: string, data, status) {
    super(messgae);
  }
}
export class InternalServerException extends EndpointException {}
export class InvalidEndpointEcxeption extends EndpointException {}
export class UnimplementedException extends EndpointException {}
