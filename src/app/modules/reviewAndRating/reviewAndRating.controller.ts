import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReviewAndRatingService } from './reviewAndRating.service';

//create
const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewAndRatingService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review And Rating created successfully!',
    data: result,
  });
});

// get all data
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewAndRatingService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review And Rating data fetch sucessfully',
    meta: result.meta,
    data: result.data,
  });
});

// Get a Single User
const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReviewAndRatingService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review And Rating single data fetch sucessfully!!',
    data: result,
  });
});

//update
const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReviewAndRatingService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review And Rating updated sucessfully',
    data: result,
  });
});

//delete
const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReviewAndRatingService.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review And Rating delete sucessfully',
    data: result,
  });
});

export const ReviewAndRatingController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
