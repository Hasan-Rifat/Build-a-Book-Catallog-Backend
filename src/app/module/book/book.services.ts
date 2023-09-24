/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { prisma } from '../../../shared/prisma';
import { BookSearchAbleFields } from './book.constants';
import {
  BookRelationalFields,
  BookRelationalFieldsMapper,
  IFilters,
} from './book.interface';

const insertIntoDB = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
  });
  return result;
};

const getAllFromDB = async (
  filters: IFilters,
  options: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const { page, size, skip } = paginationHelpers.calculatePagination(options);
  const { search, ...filterData } = filters;

  const andConditions = [];

  if (search) {
    andConditions.push({
      OR: BookSearchAbleFields.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (BookRelationalFields.includes(key)) {
          return {
            [BookRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          if (key === 'minPrice') {
            return {
              ['price']: {
                gte: parseFloat((filterData as any)[key]),
              },
            };
          } else if (key === 'maxPrice') {
            return {
              ['price']: {
                lte: parseFloat((filterData as any)[key]),
              },
            };
          } else {
            return {
              [key]: {
                equals: (filterData as any)[key],
              },
            };
          }
        }
      }),
    });
  }

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.book.findMany({
    where: whereConditions,
    skip,
    take: size,
    include: {
      category: true,
    },
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });

  const total = await prisma.book.count();

  return {
    meta: {
      total,
      page,
      size,
    },
    data: result,
  };
};

const getByIdFromDB = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const getByCategoryIdFromDB = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findFirst({
    where: {
      categoryId: id,
    },
  });

  return result;
};

const updateIntoDB = async (id: string, book: Book): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id: id,
    },
    data: book,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<Book> => {
  const result = await prisma.book.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const bookServices = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  getByCategoryIdFromDB,
};
