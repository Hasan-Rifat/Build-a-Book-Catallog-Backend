import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();
router.post('/create-book', BookController.insertIntoDB);
router.get('/', BookController.getAllFromDB);
router.get('/:id', BookController.getByIdFromDB);
router.patch('/:id', BookController.updateIntoDB);
router.delete('/:id', BookController.deleteFromDB);
router.get('/:categoryId/category', BookController.getByCategoryIdFromDB);

export const BookRoutes = router;
