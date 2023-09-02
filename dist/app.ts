import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import routers from './app/routes';
// import { globalError } from './middleware/globalError';
// import { sendRes } from './utilities/sendRes';
import cookieParser from 'cookie-parser';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import sendResponse from './shared/sendResponse';
const app: Application = express();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data API
app.use('/api/v1', routers);

// Testing API
app.get('/', (req: Request, res: Response) => {
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '+++ App Running Successfully +++',
    data: null,
  });
});

// Global error handle
app.use(globalErrorHandler);

// Unknown API Handle
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
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

export default app;
