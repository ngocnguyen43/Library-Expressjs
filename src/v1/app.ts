import { checkOverLoad } from './helpers/checkConnections';
import Database from './loader/db.loader';
import RouterLoader from './loader/routes.loader';
import ServerLoader from './loader/server.loader';
import MiddlewareLoader from './loader/middlewares.loader';
const version = 'v1';
const app = ServerLoader.init();

Database.getInstance();
RouterLoader.init(app, version);
MiddlewareLoader.init(app);
checkOverLoad();
export default app;
