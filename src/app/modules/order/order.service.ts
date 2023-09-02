import { Order, User } from '@prisma/client';
// import prisma from '../../../utilities/prisma';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
// import { ApiError } from './../../../errorFormating/apiError';

const createOrderService = async (
  userId: string,
  payload: Partial<Order>
): Promise<Order | null> => {
  const { orderedBooks } = payload;

  if (orderedBooks) {
    const orderData = {
      userId: userId, // Replace with the actual user's UUID
      orderedBooks: orderedBooks,
    };
    const result = await prisma.order.create({
      data: orderData,
    });
    return result;
  } else {
    throw new ApiError(httpStatus.BAD_GATEWAY, `Order created failed`);
  }
};

const getOrdersService = async (
  user: Partial<User>
): Promise<Order[] | null> => {
  let result;

  if (user.role === 'admin') {
    result = await prisma.order.findMany({});
  } else {
    result = await prisma.order.findMany({ where: { userId: user.id } });
  }

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Orders not found');
  }

  return result;
};

const getOrderService = async (
  user: Partial<User>,
  id: string
): Promise<Order | null> => {
  let result;

  if (user.role === 'customer') {
    result = await prisma.order.findUnique({ where: { id, userId: user.id } });
  } else {
    result = await prisma.order.findUnique({
      where: {
        id,
      },
    });
  }

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Orders not found');
  }

  return result;
};

export const OrderService = {
  createOrderService,
  getOrdersService,
  getOrderService,
};
