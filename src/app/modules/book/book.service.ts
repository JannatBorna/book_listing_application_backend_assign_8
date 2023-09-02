/* eslint-disable @typescript-eslint/no-explicit-any */
// import prisma from '../../../utilities/prisma';
import { Book, Prisma } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { calculatePagination } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { bookSearchableFields, categoryPolulate } from './book.constants';
import { IBookFilters } from './book.interfaces';

const createBookService = async (data: Book): Promise<Book | null> => {
  const result = await prisma.book.create({
    data,
    include: categoryPolulate,
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_GATEWAY, `Book created failed`);
  }

  return result;
};

const getBooksService = async (
  paginationOptions: IPaginationOptions,
  filters: IBookFilters
): Promise<Book[] | null | any> => {
  const { page, size, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions);
  const { search, minPrice, maxPrice, ...filtersData } = filters;

  const andConditons = [];

  // Search on fields
  if (search) {
    andConditons.push({
      OR: bookSearchableFields.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    });
  }

  // Other filtering
  if (Object.keys(filtersData).length > 0) {
    andConditons.push({
      AND: Object.keys(filtersData).map(key => ({
        ['categoryId']: {
          equals: (filtersData as any)[key],
        },
      })),
    });
  }

  // Filter on price
  if (minPrice && maxPrice) {
    andConditons.push({
      price: {
        gte: Number(minPrice),
        lte: Number(maxPrice),
      },
    });
  } else if (minPrice) {
    andConditons.push({
      price: {
        gte: Number(minPrice),
      },
    });
  } else if (maxPrice) {
    andConditons.push({
      price: {
        lte: Number(maxPrice),
      },
    });
  }

  const whereConditons: Prisma.BookWhereInput =
    andConditons.length > 0 ? { AND: andConditons } : {};

  const result = await prisma.book.findMany({
    where: whereConditons,
    skip,
    take: size,
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: { category: true },
  });

  const total = await prisma.book.count();
  const totalPage = Math.ceil(total / size);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book fetched failed');
  }

  return {
    meta: {
      page,
      size,
      total,
      totalPage,
    },
    data: result,
  };
};

const getBookService = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book fetched failed');
  }

  return result;
};

const getBookByCategoryIdService = async (
  categoryId: string,
  paginationOptions: IPaginationOptions,
  filters: IBookFilters
): Promise<Book[] | null | any> => {
  const { page, size, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions);
  const { search, minPrice, maxPrice } = filters;

  const andConditons = [];

  // Search on fields
  if (search) {
    andConditons.push({
      OR: bookSearchableFields.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    });
  }

  // Other filtering
  if (categoryId) {
    andConditons.push({
      AND: {
        ['categoryId']: categoryId,
      },
    });
  }

  // Filter on price
  if (minPrice && maxPrice) {
    andConditons.push({
      price: {
        gte: Number(minPrice),
        lte: Number(maxPrice),
      },
    });
  } else if (minPrice) {
    andConditons.push({
      price: {
        gte: Number(minPrice),
      },
    });
  } else if (maxPrice) {
    andConditons.push({
      price: {
        lte: Number(maxPrice),
      },
    });
  }

  const whereConditons: Prisma.BookWhereInput =
    andConditons.length > 0 ? { AND: andConditons } : {};

  const result = await prisma.book.findMany({
    where: whereConditons,
    skip,
    take: size,
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: { category: true },
  });

  const total = await prisma.book.count();
  const totalPage = Math.ceil(total / size);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book fetched failed');
  }

  return {
    meta: {
      page,
      size,
      total,
      totalPage,
    },
    data: result,
  };
};
//update
const updateBookService = async (
  id: string,
  payload: Partial<Book>
): Promise<Partial<Book>> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Book update failed');
  }
  return result;
};

//delete
const deleteBookService = async (id: string): Promise<Partial<Book>> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Book delete failed');
  }
  return result;
};

export const BookService = {
  createBookService,
  getBooksService,
  getBookService,
  getBookByCategoryIdService,
  updateBookService,
  deleteBookService,
};
