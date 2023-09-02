import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validations';

const router = express.Router();

router
  .route('/create-book')
  .post(
    auth(ENUM_USER_ROLE.ADMIN),
    validateRequest(BookValidation.create),
    BookController.createBook
  );

router.route('/').get(BookController.getBooks);

router.route('/:categoryId/category').get(BookController.getBookByCategoryId);

router
  .route('/:id')
  .get(BookController.getBook)
  .patch(auth(ENUM_USER_ROLE.ADMIN), BookController.updateBook)
  .delete(auth(ENUM_USER_ROLE.ADMIN), BookController.deleteBook);

export const bookRoutes = router;
