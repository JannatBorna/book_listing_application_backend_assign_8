import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';

//create
const signup = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.signup(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

//create
const signin = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.signin(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User signin successfully!',
    data: result,
  });
});

export const AuthController = {
  signup,
  signin,
};
