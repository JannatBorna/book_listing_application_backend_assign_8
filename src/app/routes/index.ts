import express from 'express';
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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
