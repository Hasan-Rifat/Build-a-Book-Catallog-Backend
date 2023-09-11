/* eslint-disable @typescript-eslint/no-explicit-any */
import { Order } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const insertIntoDB = async (
  userId: string,
  orderedBooks: any
): Promise<Order> => {
  const result = await prisma.order.create({
    data: {
      userId,
      orderedBooks,
    },
  });

  return result;
};

const getAllFromDB = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany();
  return result;
};

const getByIdFromDB = async (id: string): Promise<Order | null> => {
  const result = await prisma.order.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const getOrderForCustomer = async (id: string): Promise<Order[]> => {
  const result = await prisma.order.findMany({
    where: {
      id,
    },
  });
  return result;
};

export const OrderService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  getOrderForCustomer,
};
