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
exports.ReviewAndRatingService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
//Review And Rating create
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reviewAndRating.create({
        data,
    });
    return result;
});
//get all data Review And Rating
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reviewAndRating.findMany({
        include: {
            user: true,
            book: true,
        },
    });
    const total = yield prisma_1.default.reviewAndRating.count();
    return {
        meta: {
            total,
            page: 1,
            limit: 10,
        },
        data: result,
    };
});
// Get a Single Review And Rating
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reviewAndRating.findUnique({
        where: {
            id,
        },
        include: {
            user: true,
            book: true,
        },
    });
    return result;
});
//Review And Rating update
const updateOneInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reviewAndRating.update({
        where: {
            id,
        },
        include: {
            user: true,
            book: true,
        },
        data: payload,
    });
    return result;
});
//Review And Rating delete
const deleteByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reviewAndRating.delete({
        where: {
            id,
        },
        include: {
            user: true,
            book: true,
        },
    });
    return result;
});
exports.ReviewAndRatingService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
};
