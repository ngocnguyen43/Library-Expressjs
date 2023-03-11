/* eslint-disable @typescript-eslint/no-floating-promises */
import { Express, Request, Response, NextFunction } from 'express';
import { InvalidEndpointEcxeption } from '../core/exceptions/EndPointException';
import { BaseException } from './../core/exceptions/BaseException';
import { logEvents } from './../helpers/WriteLogs';
import { createId } from '@paralleldrive/cuid2';
class MiddlewareLoader {
  static init = (app: Express): Express => {
    app.use((req: Request, res: Response, next: NextFunction) => {
      const error = new InvalidEndpointEcxeption();
      next(error);
    });
    app.use((error: BaseException, req: Request, res: Response, next: NextFunction) => {
      logEvents(`ERROR---------${createId()}-------${req.url}-------${req.method}------${error.message}`);
      return res.status(error.statusCode).json({
        message: error.message,
        errorCode: error.errorCode,
      });
    });
    app.use((req, res) => {
      logEvents(`SUCCESSS------${createId()}-------${req.url}-------${req.method}`);
    });
    return app;
  };
}
export default MiddlewareLoader;
