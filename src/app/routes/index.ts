import express from 'express';
// import { authRoutes } from '../modules/auth/auth.routers';
import { authRoutes } from '../modules/auth/auth.routers';
import { bookRouters } from '../modules/book/book.routers';
import { categoryRouters } from '../modules/category/category.routers';
import { orderRouters } from '../modules/order/order.routers';
import { reviewAndRatingRouters } from '../modules/reviewAndRating/reviewAndRating.routes';
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
    path: '/categories',
    route: categoryRouters,
  },

  {
    path: '/books',
    route: bookRouters,
  },

  {
    path: '/reviews',
    route: reviewAndRatingRouters,
  },

  {
    path: '/orders',
    route: orderRouters,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
