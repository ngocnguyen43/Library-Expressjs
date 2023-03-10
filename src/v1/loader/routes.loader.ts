import { Express } from 'express';

import { router as AuthRouter } from './../routes/AuthRouter';
class RouterLoader {
  static init(app: Express, version: string) {
    app.use(`/api/${version}/auth`, AuthRouter);
  }
}
export default RouterLoader;
