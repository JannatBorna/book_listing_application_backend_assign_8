import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { auth } from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { deleteUser, getUser, getUsers, updateUser } from './user.controller';
import { updateUserZod } from './user.validation';

const router = express.Router();

// example route
router.route('/').get(auth(ENUM_USER_ROLE.ADMIN), getUsers);

router
  .route('/:id')
  .get(auth(ENUM_USER_ROLE.ADMIN), getUser)
  .patch(auth(ENUM_USER_ROLE.ADMIN), validateRequest(updateUserZod), updateUser)
  .delete(auth(ENUM_USER_ROLE.ADMIN), deleteUser);

export const userRouters = router;
