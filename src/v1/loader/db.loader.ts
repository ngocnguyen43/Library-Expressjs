import mongoose from 'mongoose';
import defaultConfig from '../../config';
import { countConnections } from '../helpers/checkConnections';
const {
  db: { url, name, port },
} = defaultConfig;

const connection = `mongodb://${url}:${port}/${name}`;

class Database {
  private static __instance: Database;
  private constructor() {
    this.connect();
  }
  connect(): void {
    // eslint-disable-next-line no-constant-condition
    if (true) {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
      mongoose.set('strictQuery', true);
    }
    mongoose
      .connect(connection)
      .then(() => {
        console.log('Connect Successfully ');
        countConnections();
      })
      .catch(() => console.log('Connect Failed'));
  }
  static getInstance(): Database {
    if (!Database.__instance) {
      Database.__instance = new Database();
    }
    return Database.__instance;
  }
}

export default Database;
