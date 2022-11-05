import { Express } from 'express';

const version = '/api/v1';

module.exports = (app: Express) => {
  app.use(version + '/item', require('./item.routes'));
  app.use(version + '/user', require('./user.routes'));
  app.use(version + '/transaction', require('./transaction.routes'));
};
