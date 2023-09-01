import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

//create
router.post('/create-order', OrderController.insertIntoDB);

export const orderRouters = router;
