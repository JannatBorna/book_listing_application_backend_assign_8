import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { BookController } from './book.controller';

const router = express.Router();
//get all data
router.get('/', BookController.getAllFromDB);

//get all data
router.get('/:id', BookController.getByIdFromDB);

//create
router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookController.insertIntoDB
);

//Update a Single Book
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookController.updateOneInDB
);

//Delete a book
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookController.deleteByIdFromDB
);

// Assign-Faculties
router.post(
  '/:id/category',
  // validateRequest(CourseValidation.assignOrRemoveFaculties),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookController.assignCategory
);

export const bookRouters = router;
