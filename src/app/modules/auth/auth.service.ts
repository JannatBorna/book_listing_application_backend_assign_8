import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { createToken } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import { returnUser } from './auth.constants';
import { IAuthSignin, IAuthSigninResponse } from './auth.interface';
import { isExist } from './auth.utils';

export const signUpService = async (
  data: User
): Promise<Partial<User> | null> => {
  // existency check
  const [email] = await Promise.all([isExist(data.email)]);

  if (email) {
    throw new ApiError(httpStatus.BAD_REQUEST, `Email already exist`);
  }

  // save new user
  const { password } = data;
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bycrypt_salt_rounds)
  );
  data.password = hashedPassword;

  const result = await prisma.user.create({
    data,
    select: returnUser,
  });

  if (!result) {
    throw new Error(`User create failed`);
  }

  return result;
};

export const signInService = async (
  data: IAuthSignin
): Promise<IAuthSigninResponse | null> => {
  // existency check
  const user = await isExist(data.email);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  // Password check
  const passwordMatch = await bcrypt.compare(data.password, user.password);
  if (!passwordMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  // Create Access Token
  const { id, role, name, email } = user;
  const token = createToken(
    { id, role, name, email },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  // Create Refresh Token
  const refreshToken = createToken(
    { id, role, name, email },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    token,
    refreshToken,
  };
};
