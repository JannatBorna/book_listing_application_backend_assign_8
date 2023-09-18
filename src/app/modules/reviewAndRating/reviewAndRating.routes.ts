import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { auth } from '../../middlewares/auth';
import { ReviewAndRatingController } from './reviewAndRating.controller';

const router = express.Router();

//get all data
router.get('/', ReviewAndRatingController.getAllFromDB);

// Get a Single User
router.get('/:id', ReviewAndRatingController.getByIdFromDB);

//create
router.post(
  '/create-review',
  auth(ENUM_USER_ROLE.CUSTOMER),
  ReviewAndRatingController.insertIntoDB
);

//update
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.CUSTOMER),
  ReviewAndRatingController.updateOneInDB
);

//delete
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.CUSTOMER),
  ReviewAndRatingController.deleteByIdFromDB
);

export const reviewRoutes = router;
