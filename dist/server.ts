'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const logger_1 = require('./utilities/logger');
const bootStrap_1 = require('./utilities/bootStrap');
let server;
process.on('uncaughtException', error => {
  logger_1.errorLogger.error(error);
  process.exit(1);
});
(0, bootStrap_1.bootStrap)();
process.on('SIGTERM', () => {
  logger_1.logger.info(`Sigterm is received`);
  if (server) {
    server.close();
  }
});
