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
exports.OrderService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createOrder = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderedBooks, status } = data;
    const order = yield prisma_1.default.order.create({
        data: {
            userId: id,
            orderedBooks,
            status: status,
        },
    });
    return order;
});
const getAllOrders = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, role } = user;
    if (role === 'admin') {
        const order = yield prisma_1.default.order.findMany({});
        return order;
    }
    const order = yield prisma_1.default.order.findMany({
        where: {
            userId,
        },
    });
    return order;
});
const getSingleOrder = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, role } = user;
    if (role === 'admin') {
        const order = yield prisma_1.default.order.findUnique({
            where: {
                id,
            },
        });
        return order;
    }
    const order = yield prisma_1.default.order.findUnique({
        where: {
            id,
        },
    });
    if ((order === null || order === void 0 ? void 0 : order.userId) !== userId) {
        throw new ApiError_1.default(403, 'You are not authorized to view this order');
    }
    return order;
});
exports.OrderService = {
    createOrder,
    getAllOrders,
    getSingleOrder,
};
