import { Express } from 'express';
class RouterLoader {
  static init(app: Express, version: string) {
    app.use(`/api/${version}`);
  }
}
export default RouterLoader;
