import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { BookSearchAbleFields } from './book.constants';
import { bookServices } from './book.services';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.insertIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book create successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, BookSearchAbleFields);
  const options = pick(req.query, ['sortBy', 'sortOrder', 'limit', 'page']);
  const result = await bookServices.getAllFromDB(filter, options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Books fetched successfully',
    data: result,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.getByIdFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book fetched successfully',
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.updateIntoDB(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.deleteFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book deleted successfully',
    data: result,
  });
});

const getByCategoryIdFromDB = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.params.categoryId);
    const result = await bookServices.getByCategoryIdFromDB(
      req.params.categoryId
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Book fetched successfully',
      data: result,
    });
  }
);

export const BookController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  getByCategoryIdFromDB,
};
