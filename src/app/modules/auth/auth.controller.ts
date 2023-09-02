import { User } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../../../config';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAuthSigninResponse } from './auth.interface';
import { signInService, signUpService } from './auth.service';
// import { sendRes } from '../../../utilities/sendRes';
// import { tryCatch } from '../../../utilities/tryCatch';
// import { IAuthSigninResponse } from './auth.interfaces';
// import { signInService, signUpService } from './auth.services';

export const signUp = catchAsync(async (req: Request, res: Response) => {
  const result = await signUpService(req.body);
  sendResponse<Partial<User>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

export const signIn = catchAsync(async (req: Request, res: Response) => {
  const result = await signInService(req.body);

  if (result !== null) {
    const { refreshToken, ...others } = result;
    // Set Refresh Token in Cookies
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };
    res.cookie('refreshToken', refreshToken, cookieOptions);

    sendResponse<IAuthSigninResponse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User signin successfully!',
      data: others,
    });
  } else {
    sendResponse<IAuthSigninResponse>(res, {
      statusCode: httpStatus.UNAUTHORIZED,
      success: true,
      message: 'Sign in failed',
      data: result,
    });
  }
});
