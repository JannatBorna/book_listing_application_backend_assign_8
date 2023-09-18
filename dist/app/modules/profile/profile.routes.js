"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = require("../../middlewares/auth");
const profile_controllers_1 = require("./profile.controllers");
const router = express_1.default.Router();
router
    .route('/')
    .get((0, auth_1.auth)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), profile_controllers_1.ProfileController.getProfile);
exports.profileRouter = router;
