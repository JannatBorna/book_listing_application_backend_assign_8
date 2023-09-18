import express from 'express';
import { authRoutes } from '../modules/auth/auth.routers';
import { bookRoutes } from '../modules/book/book.routers';
import { categoryRouters } from '../modules/category/category.routers';
import { orderRoutes } from '../modules/order/order.routers';
import { profileRouter } from '../modules/profile/profile.routes';
import { reviewRoutes } from '../modules/reviewAndRating/reviewAndRating.routes';
import { userRouters } from '../modules/user/user.routers';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    route: authRoutes,
  },

  {
    path: '/users',
    route: userRouters,
  },
  {
    path: '/profile',
    route: profileRouter,
  },
  {
    path: '/categories',
    route: categoryRouters,
  },

  {
    path: '/books',
    route: bookRoutes,
  },

  {
    path: '/reviews',
    route: reviewRoutes,
  },

  {
    path: '/orders',
    route: orderRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
