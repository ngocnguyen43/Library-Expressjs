import { Express } from 'express';

import { router as AuthRouter } from './../routes/AuthRouter';
import { router as UserRouter } from './../routes/UserRouter';
import { router as BookRouter } from './../routes/BookRoter';
import { router as IssueRouter } from '../routes/IssueRouter';
class RouterLoader {
  static init(app: Express, version: string) {
    app.use(`/api/${version}/auth`, AuthRouter);
    app.use(`/api/${version}/`, UserRouter);
    app.use(`/api/${version}/`, BookRouter);
    app.use(`/api/${version}/`, IssueRouter);
  }
}
export default RouterLoader;
