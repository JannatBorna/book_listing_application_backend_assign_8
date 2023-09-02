import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { auth } from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { userController } from './user.controller';
import { updateUserZod } from './user.validation';

const router = express.Router();

router.route('/').get(auth(ENUM_USER_ROLE.ADMIN), userController.getAllUsers);

router
  .route('/:id')
  .get(auth(ENUM_USER_ROLE.ADMIN), userController.getUser)
  .patch(
    auth(ENUM_USER_ROLE.ADMIN),
    validateRequest(updateUserZod),
    userController.updateUser
  )
  .delete(auth(ENUM_USER_ROLE.ADMIN), userController.deleteUser);

export const userRouters = router;
