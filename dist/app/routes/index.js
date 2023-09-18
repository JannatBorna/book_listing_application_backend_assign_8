"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routers_1 = require("../modules/auth/auth.routers");
const book_routers_1 = require("../modules/book/book.routers");
const category_routers_1 = require("../modules/category/category.routers");
const order_routers_1 = require("../modules/order/order.routers");
const profile_routes_1 = require("../modules/profile/profile.routes");
const reviewAndRating_routes_1 = require("../modules/reviewAndRating/reviewAndRating.routes");
const user_routers_1 = require("../modules/user/user.routers");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/auth',
        route: auth_routers_1.authRoutes,
    },
    {
        path: '/users',
        route: user_routers_1.userRouters,
    },
    {
        path: '/profile',
        route: profile_routes_1.profileRouter,
    },
    {
        path: '/categories',
        route: category_routers_1.categoryRouters,
    },
    {
        path: '/books',
        route: book_routers_1.bookRoutes,
    },
    {
        path: '/reviews',
        route: reviewAndRating_routes_1.reviewRoutes,
    },
    {
        path: '/orders',
        route: order_routers_1.orderRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
