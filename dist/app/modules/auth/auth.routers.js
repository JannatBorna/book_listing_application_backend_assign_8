"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_controller_1 = require("./auth.controller");
const auth_validations_1 = require("./auth.validations");
const router = express_1.default.Router();
router.route('/signup').post((0, validateRequest_1.default)(auth_validations_1.signUpZod), auth_controller_1.signUp);
router.route('/signin').post((0, validateRequest_1.default)(auth_validations_1.signInZod), auth_controller_1.signIn);
exports.authRoutes = router;
