import { Book, BookCategory } from '@prisma/client';
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

// Get a Single Book
const getByIdFromDB = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });
  return result;
};

//Update a Single Book
const updateOneInDB = async (
  id: string,
  payload: Partial<Book>
): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

//Delete a book
const deleteByIdFromDB = async (id: string): Promise<Book> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });
  return result;
};

// Assign/create Category
const assignCategory = async (
  id: string,
  payload: string[]
): Promise<BookCategory[]> => {
  await prisma.bookCategory.createMany({
    data: payload.map(bookId => ({
      categoryId: id,
      bookId: bookId,
    })),
  });
  const assignCategoriesData = await prisma.bookCategory.findMany({
    where: {
      categoryId: id,
    },
    include: {
      book: true,
    },
  });
  return assignCategoriesData;
};

export const BookService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  assignCategory,
};
