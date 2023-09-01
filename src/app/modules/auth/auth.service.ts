import { User } from '@prisma/client';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';

const signUp1 = async (data: User) => {
  const user = await prisma.user.create({
    data,
  });

  const { id, role } = user;
  const accessToken = jwtHelpers.createToken(
    { userId: id, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const { password, createdAt, updatedAt, ...userWithoutPassword } = user;
  console.log(password, createdAt, updatedAt);

  return { user: userWithoutPassword, accessToken };
};

//create
const signup = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

//create
const signin = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

export const AuthService = {
  signUp1,
  signup,
  signin,
};
