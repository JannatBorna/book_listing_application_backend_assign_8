import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { auth } from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { categoryValidation } from './category.validations';

const router = express.Router();

//get all data
router.get('/', CategoryController.getAllFromDB);

// Get a Single User
router.get('/:id', CategoryController.getByIdFromDB);

//create
router.post(
  '/create-category',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(categoryValidation.create),
  CategoryController.insertIntoDB
);

//update
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(categoryValidation.create),
  CategoryController.updateOneInDB
);

//delete
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteByIdFromDB
);

export const categoryRouters = router;
