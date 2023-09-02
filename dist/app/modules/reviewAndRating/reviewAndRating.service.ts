import { ReviewAndRating } from '@prisma/client';
import { IGenericResponse } from '../../../interfaces/common';
import prisma from '../../../shared/prisma';

//Review And Rating create
const insertIntoDB = async (
  data: ReviewAndRating
): Promise<ReviewAndRating> => {
  const result = await prisma.reviewAndRating.create({
    data,
  });
  return result;
};

//get all data Review And Rating
const getAllFromDB = async (): Promise<IGenericResponse<ReviewAndRating[]>> => {
  const result = await prisma.reviewAndRating.findMany({
    include: {
      user: true,
      book: true,
    },
  });
  const total = await prisma.reviewAndRating.count();
  return {
    meta: {
      total,
      page: 1,
      limit: 10,
    },
    data: result,
  };
};

// Get a Single Review And Rating
const getByIdFromDB = async (id: string): Promise<ReviewAndRating | null> => {
  const result = await prisma.reviewAndRating.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      book: true,
    },
  });
  return result;
};

//Review And Rating update
const updateOneInDB = async (
  id: string,
  payload: Partial<ReviewAndRating>
): Promise<ReviewAndRating> => {
  const result = await prisma.reviewAndRating.update({
    where: {
      id,
    },
    include: {
      user: true,
      book: true,
    },
    data: payload,
  });
  return result;
};

//Review And Rating delete
const deleteByIdFromDB = async (id: string): Promise<ReviewAndRating> => {
  const result = await prisma.reviewAndRating.delete({
    where: {
      id,
    },
    include: {
      user: true,
      book: true,
    },
  });
  return result;
};

export const ReviewAndRatingService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
