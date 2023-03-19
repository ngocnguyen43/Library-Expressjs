'use strict';
import { checkOverLoad } from './helpers/checkConnections';
import Database from './loader/db.loader';
import RouterLoader from './loader/routes.loader';
import ServerLoader from './loader/server.loader';
import MiddlewareLoader from './loader/middlewares.loader';
// import { seed } from './utils/seed';
const version = 'v1';
const app = ServerLoader.init();

// seed(1000).catch(Error);
Database.getInstance();
RouterLoader.init(app, version);
MiddlewareLoader.init(app);
// checkOverLoad();
export default app;
