import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { auth } from '../../middlewares/auth';
import { OrderController } from './order.controller';

const router = express.Router();

// example route
router
  .route('/create-order')
  .post(auth(ENUM_USER_ROLE.CUSTOMER), OrderController.createOrder);

router
  .route('/')
  .get(
    auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
    OrderController.getOrders
  );

router
  .route('/:orderId')
  .get(
    auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
    OrderController.getOrder
  );

export const orderRouters = router;
