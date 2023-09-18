"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouters = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = require("../../middlewares/auth");
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
// example route
router
    .route('/create-order')
    .post((0, auth_1.auth)(user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.createOrder);
router
    .route('/')
    .get((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.getOrders);
router
    .route('/:orderId')
    .get((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.getOrder);
exports.orderRouters = router;
