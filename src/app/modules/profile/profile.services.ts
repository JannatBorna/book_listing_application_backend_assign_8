import { User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { returnUser } from '../auth/auth.constants';

const getProfileService = async (
  user: Partial<User>
): Promise<Partial<User>> => {
  const result = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: returnUser,
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User retrieved failed');
  }
  return result;
};

export const ProfileService = {
  getProfileService,
};
