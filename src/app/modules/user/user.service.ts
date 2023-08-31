import { User } from '@prisma/client';
import { IGenericResponse } from '../../../interfaces/common';
import prisma from '../../../shared/prisma';

//create
const insertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

//get all data
const getAllFromDB = async (): Promise<IGenericResponse<User[]>> => {
  const result = await prisma.user.findMany();
  const total = await prisma.user.count();
  return {
    meta: {
      total,
      page: 1,
      limit: 10,
    },
    data: result,
  };
};

// Get a Single User
const getByIdFromDB = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

//update
const updateOneInDB = async (
  id: string,
  payload: Partial<User>
): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

//delete
const deleteByIdFromDB = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const UserService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
