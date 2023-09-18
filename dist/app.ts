'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const routes_1 = __importDefault(require('./app/routes'));
const globalError_1 = require('./middleware/globalError');
const sendRes_1 = require('./utilities/sendRes');
const http_status_1 = __importDefault(require('http-status'));
const cookie_parser_1 = __importDefault(require('cookie-parser'));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Data API
app.use('/api/v1', routes_1.default);
// Testing API
app.get('/', (req, res) => {
  (0, sendRes_1.sendRes)(res, {
    statusCode: http_status_1.default.OK,
    success: true,
    message: '+++ App Running Successfully +++',
    data: null,
  });
});
// Global error handle
app.use(globalError_1.globalError);
// Unknown API Handle
app.use((req, res, next) => {
  res.status(http_status_1.default.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});
exports.default = app;
