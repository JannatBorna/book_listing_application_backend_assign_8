import { Book } from '@prisma/client';
import { IGenericResponse } from '../../../interfaces/common';
import prisma from '../../../shared/prisma';

//create
const insertIntoDB = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

//get all data
const getAllFromDB = async (): Promise<IGenericResponse<Book[]>> => {
  const result = await prisma.book.findMany({
    include: {
      category: true,
    },
  });
  const total = await prisma.book.count();
  return {
    meta: {
      total,
      page: 4,
      limit: 10,
    },
    data: result,
  };
};

export const BookService = {
  insertIntoDB,
  getAllFromDB,
};
