"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouters = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = require("../../middlewares/auth");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_controller_1 = require("./category.controller");
const category_validations_1 = require("./category.validations");
const router = express_1.default.Router();
//get all data
router.get('/', category_controller_1.CategoryController.getAllFromDB);
// Get a Single User
router.get('/:id', category_controller_1.CategoryController.getByIdFromDB);
//create
router.post('/create-category', (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(category_validations_1.categoryValidation.create), category_controller_1.CategoryController.insertIntoDB);
//update
router.patch('/:id', (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(category_validations_1.categoryValidation.create), category_controller_1.CategoryController.updateOneInDB);
//delete
router.delete('/:id', (0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.CategoryController.deleteByIdFromDB);
exports.categoryRouters = router;
