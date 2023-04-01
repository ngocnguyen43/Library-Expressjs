export interface config {
  app: number | string;
  db: {
    url: string;
    name: string;
    port: number | string;
  };
}
const dev: config = {
  app: process.env.DEV_PORT || 4343,
  db: {
    url: process.env.DB_DEV_URI || 'localhost',
    port: process.env.DB_DEV_PORT || 27017,
    name: process.env.DB_DEV_NAME || 'JP',
  },
};
const prod: config = {
  app: process.env.PROD_PORT || 4342,
  db: {
    url: process.env.DB_PROD_URI || 'localhost',
    port: process.env.DB_PROD_PORT || 27017,
    name: process.env.DB_PROD_NAME || 'JP',
  },
};
const test: config = {
  app: process.env.TEST_PORT || 4341,
  db: {
    url: process.env.DB_TEST_URI || 'localhost',
    port: process.env.DB_TEST_PORT || 27017,
    name: process.env.DB_TEST_NAME || 'JP',
  },
};
const stage = process.env.STAGE || 'development';
let defaultConfig: config;
if (stage === 'production') {
  defaultConfig = prod;
} else if (stage === 'test') {
  defaultConfig = test;
} else {
  defaultConfig = dev;
}
export default defaultConfig;
