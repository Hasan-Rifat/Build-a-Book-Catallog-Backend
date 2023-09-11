import { Category } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const insertIntoDB = async (data: Category): Promise<Category> => {
  return await prisma.category.create({
    data,
  });
};

const getAllFromDB = async (): Promise<Category[]> => {
  return await prisma.category.findMany();
};

const getByIdFromDB = async (id: string): Promise<Category | null> => {
  return await prisma.category.findUnique({
    where: {
      id: id,
    },
  });
};

const updateIntoDB = async (id: string, data: Category): Promise<Category> => {
  return await prisma.category.update({
    where: {
      id: id,
    },
    data,
  });
};

const deleteFromDB = async (id: string): Promise<Category> => {
  return await prisma.category.delete({
    where: {
      id: id,
    },
  });
};

export const CategoryServices = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
