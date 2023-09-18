"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInService = exports.signUpService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const auth_constants_1 = require("./auth.constants");
const auth_utils_1 = require("./auth.utils");
const signUpService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // existency check
    const [email] = yield Promise.all([(0, auth_utils_1.isExist)(data.email)]);
    if (email) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, `Email already exist`);
    }
    // save new user
    const { password } = data;
    const hashedPassword = yield bcrypt_1.default.hash(password, Number(config_1.default.bcrypt_solt_round));
    data.password = hashedPassword;
    const result = yield prisma_1.default.user.create({
        data,
        select: auth_constants_1.returnUser,
    });
    if (!result) {
        throw new Error(`User create failed`);
    }
    return result;
});
exports.signUpService = signUpService;
const signInService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // existency check
    const user = yield (0, auth_utils_1.isExist)(data.email);
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    // Password check
    const passwordMatch = yield bcrypt_1.default.compare(data.password, user.password);
    if (!passwordMatch) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password is incorrect');
    }
    // Create Access Token
    const { id, role, name, email } = user;
    const token = (0, jwtHelpers_1.createToken)({ id, role, name, email }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    // Create Refresh Token
    const refreshToken = (0, jwtHelpers_1.createToken)({ id, role, name, email }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        token,
        refreshToken,
    };
});
exports.signInService = signInService;
