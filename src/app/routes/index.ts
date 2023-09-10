import express from 'express';
import { AuthRouter } from '../module/auth/auth.routes';
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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
