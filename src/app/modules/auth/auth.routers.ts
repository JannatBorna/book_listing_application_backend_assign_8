import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { signIn, signUp } from './auth.controller';
import { signInZod, signUpZod } from './auth.validations';

const router = express.Router();

router.route('/signup').post(validateRequest(signUpZod), signUp);

router.route('/signin').post(validateRequest(signInZod), signIn);

export const authRoutes = router;
