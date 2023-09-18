"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouters = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = require("../../middlewares/auth");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
// example route
router.route('/').get((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.getUsers);
router
    .route('/:id')
    .get((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.getUser)
    .patch((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(user_validation_1.updateUserZod), user_controller_1.updateUser)
    .delete((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.deleteUser);
exports.userRouters = router;
