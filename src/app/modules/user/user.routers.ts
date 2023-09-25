import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { auth } from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import {
  deleteUser,
  getIdByUser,
  getUsers,
  updateUser,
} from './user.controller';
import { updateUserZod } from './user.validation';

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), getIdByUser);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(updateUserZod),
  updateUser
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), deleteUser);

export const userRouters = router;
