import express from 'express';
import { AuthRouter } from '../module/auth/auth.routes';
import { BookRoutes } from '../module/book/book.routes';
import { CategoryRoutes } from '../module/category/category.routes';
import { OrderRoutes } from '../module/order/order.routes';
import { UserRouter } from '../module/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
