"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = require("../../middlewares/auth");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_controller_1 = require("./book.controller");
const book_validations_1 = require("./book.validations");
const router = express_1.default.Router();
router
    .route('/create-book')
    .post((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(book_validations_1.BookValidation.create), book_controller_1.BookController.createBook);
router.route('/').get(book_controller_1.BookController.getBooks);
router.route('/:categoryId/category').get(book_controller_1.BookController.getBookByCategoryId);
router
    .route('/:id')
    .get(book_controller_1.BookController.getBook)
    .patch((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.updateBook)
    .delete((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.deleteBook);
exports.bookRoutes = router;
