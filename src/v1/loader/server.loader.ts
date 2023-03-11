/* eslint-disable @typescript-eslint/no-unsafe-call */
import express, { Express, json, urlencoded } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
class ServerLoader {
  static init(): Express {
    const app: Express = express();
    app.use(json());
    app.use(
      urlencoded({
        extended: true,
      }),
    );

    app.use(compression());
    app.use(morgan('dev'));
    app.use(helmet());
    app.use(cors());
    return app;
  }
}
export default ServerLoader;
