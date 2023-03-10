import ServerLoader from './loader/server.loader';
import { checkOverLoad } from './helpers/checkConnections';
import Database from './loader/db.loader';
import RouterLoader from './loader/routes.loader';
const version = 'v1';
const app = ServerLoader.init();

Database.getInstance();
RouterLoader.init(app, version);
checkOverLoad();
export default app;
