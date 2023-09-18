import { Request, Response } from 'express';
// import { tryCatch } from '../../../utilities/tryCatch';
// import { sendRes } from '../../../utilities/sendRes';
import { User } from '@prisma/client';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import {
  deleteUserService,
  getUserService,
  getUsersService,
  updateUserService,
} from './user.service';
// import {
// deleteUserService,
// getUserService,
// getUsersService,
// updateUserService,
// } from './user.services';

export const getUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await getUsersService();

  sendResponse<Partial<Omit<User, 'password'>[]>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  });
});

export const getUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await getUserService(id);

  sendResponse<Partial<User>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
});

export const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await updateUserService(id, req.body);

  sendResponse<Partial<User>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

export const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await deleteUserService(id);

  sendResponse<Partial<User>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});
