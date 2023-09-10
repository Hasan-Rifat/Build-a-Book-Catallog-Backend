import { User } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const insertIntoDB = (user: User): Promise<User> => {
  const result = prisma.user.create({
    data: user,
  });
  return result;
};

export const AuthService = {
  insertIntoDB,
};
