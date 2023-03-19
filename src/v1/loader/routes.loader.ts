import { Express } from 'express';

import { router as AuthRouter } from './../routes/AuthRouter';
import { router as UserRouter } from './../routes/UserRouter';
import { router as BookRouter } from './../routes/BookRoter';
class RouterLoader {
  static init(app: Express, version: string) {
    app.use(`/api/${version}/auth`, AuthRouter);
    app.use(`/api/${version}/`, UserRouter);
    app.use(`/api/${version}/`, BookRouter);
  }
}
export default RouterLoader;
