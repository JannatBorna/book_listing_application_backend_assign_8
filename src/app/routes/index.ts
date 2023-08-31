import express from 'express';
import { categoryRouters } from '../modules/category/category.routers';
import { userRouters } from '../modules/user/user.routers';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth/signup',
    route: userRouters,
  },

  {
    path: '/users',
    route: userRouters,
  },
  {
    path: '/categories',
    route: categoryRouters,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
