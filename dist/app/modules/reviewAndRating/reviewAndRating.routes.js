"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = require("../../middlewares/auth");
const reviewAndRating_controller_1 = require("./reviewAndRating.controller");
const router = express_1.default.Router();
//get all data
router.get('/', reviewAndRating_controller_1.ReviewAndRatingController.getAllFromDB);
// Get a Single User
router.get('/:id', reviewAndRating_controller_1.ReviewAndRatingController.getByIdFromDB);
//create
router.post('/create-review', (0, auth_1.auth)(user_1.ENUM_USER_ROLE.CUSTOMER), reviewAndRating_controller_1.ReviewAndRatingController.insertIntoDB);
//update
router.patch('/:id', (0, auth_1.auth)(user_1.ENUM_USER_ROLE.CUSTOMER), reviewAndRating_controller_1.ReviewAndRatingController.updateOneInDB);
//delete
router.delete('/:id', (0, auth_1.auth)(user_1.ENUM_USER_ROLE.CUSTOMER), reviewAndRating_controller_1.ReviewAndRatingController.deleteByIdFromDB);
exports.reviewRoutes = router;
