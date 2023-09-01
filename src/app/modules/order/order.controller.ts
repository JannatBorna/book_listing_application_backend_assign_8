import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

//create
const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  //   const { userId, orderedBooks } = req.body;
  //   const result = await insertIntoDB(userId, orderedBooks);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully!',
    // data: result,
  });
});

export const OrderController = {
  insertIntoDB,
};
