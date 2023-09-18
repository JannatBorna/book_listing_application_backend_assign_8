/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { returnUser } from '../auth/auth.constants';

export const getUsersService = async (): Promise<
  Partial<Omit<User, 'password'>[]>
> => {
  const result = await prisma.user.findMany({ select: returnUser });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Users retrieved failed');
  }
  return result;
};

export const getUserService = async (id: string): Promise<Partial<User>> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    select: returnUser,
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User retrieved failed');
  }
  return result;
};

export const updateUserService = async (
  id: string,
  payload: Partial<User>
): Promise<Partial<User>> => {
  const { role, password, ...others } = payload;

  const result = await prisma.user.update({
    where: {
      id,
    },
    data: others,
    select: returnUser,
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User update failed');
  }
  return result;
};

export const deleteUserService = async (id: string): Promise<Partial<User>> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
    select: returnUser,
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User deleted failed');
  }
  return result;
};
