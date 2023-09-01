import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidation.SignUp),
  AuthController.signup
);

router.post(
  '/signin',
  //   validateRequest(AuthValidation.SignUp),
  AuthController.signup
);

export const authRoutes = router;
