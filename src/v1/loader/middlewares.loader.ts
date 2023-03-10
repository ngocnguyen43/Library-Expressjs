import { Express, Request, Response, NextFunction } from 'express';
import { InvalidEndpointEcxeption } from '../core/exceptions/EndPointException';
import { BaseException } from './../core/exceptions/BaseException';
class MiddlewareLoader {
  static init = (app: Express): Express => {
    app.use((req: Request, res: Response, next: NextFunction) => {
      const error = new InvalidEndpointEcxeption();
      next(error);
    });
    app.use((error: BaseException, req: Request, res: Response, next: NextFunction) => {
      return res.status(error.statusCode).json({
        message: error.message,
        errorCode: error.errorCode,
      });
    });
    return app;
  };
}
export default MiddlewareLoader;
