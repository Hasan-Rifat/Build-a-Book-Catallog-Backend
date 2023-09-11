import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/create-order', OrderController.insertIntoDB);
router.get('/', OrderController.getAllFromDB);
router.get('/:orderId', OrderController.getByIdFromDB);
router.get('/:orderId/customer', OrderController.getOrderForCustomer);

export const OrderRoutes = router;
