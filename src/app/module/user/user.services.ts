import { User } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const getAllFromDB = (): Promise<User[]> => {
  const result = prisma.user.findMany();
  return result;
};

const getByIdFromDB = (id: string): Promise<User | null> => {
  const result = prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateIntoDB = (id: string, user: User): Promise<User> => {
  const result = prisma.user.update({
    where: {
      id: id,
    },
    data: user,
  });
  return result;
};

const deleteFromDB = (id: string): Promise<User> => {
  const result = prisma.user.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const userServices = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
