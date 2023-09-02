import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ProfileController } from './profile.controllers';

const router = express.Router();

router
  .route('/')
  .get(
    auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
    ProfileController.getProfile
  );

export const profileRouter = router;
