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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const book_constants_1 = require("./book.constants");
const createBookService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.create({
        data,
        include: book_constants_1.categoryPolulate,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.BAD_GATEWAY, `Book created failed`);
    }
    return result;
});
const getBooksService = (paginationOptions, filters) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, skip, sortBy, sortOrder } = (0, paginationHelper_1.calculatePagination)(paginationOptions);
    const { search, minPrice, maxPrice } = filters, filtersData = __rest(filters, ["search", "minPrice", "maxPrice"]);
    const andConditons = [];
    // Search on fields
    if (search) {
        andConditons.push({
            OR: book_constants_1.bookSearchableFields.map(field => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive',
                },
            })),
        });
    }
    // Other filtering
    if (Object.keys(filtersData).length > 0) {
        andConditons.push({
            AND: Object.keys(filtersData).map(key => ({
                ['categoryId']: {
                    equals: filtersData[key],
                },
            })),
        });
    }
    // Filter on price
    if (minPrice && maxPrice) {
        andConditons.push({
            price: {
                gte: Number(minPrice),
                lte: Number(maxPrice),
            },
        });
    }
    else if (minPrice) {
        andConditons.push({
            price: {
                gte: Number(minPrice),
            },
        });
    }
    else if (maxPrice) {
        andConditons.push({
            price: {
                lte: Number(maxPrice),
            },
        });
    }
    const whereConditons = andConditons.length > 0 ? { AND: andConditons } : {};
    const result = yield prisma_1.default.book.findMany({
        where: whereConditons,
        skip,
        take: size,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: { category: true },
    });
    const total = yield prisma_1.default.book.count();
    const totalPage = Math.ceil(total / size);
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Book fetched failed');
    }
    return {
        meta: {
            page,
            size,
            total,
            totalPage,
        },
        data: result,
    };
});
const getBookService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Book fetched failed');
    }
    return result;
});
const getBookByCategoryIdService = (categoryId, paginationOptions, filters) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, skip, sortBy, sortOrder } = (0, paginationHelper_1.calculatePagination)(paginationOptions);
    const { search, minPrice, maxPrice } = filters;
    const andConditons = [];
    // Search on fields
    if (search) {
        andConditons.push({
            OR: book_constants_1.bookSearchableFields.map(field => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive',
                },
            })),
        });
    }
    // Other filtering
    if (categoryId) {
        andConditons.push({
            AND: {
                ['categoryId']: categoryId,
            },
        });
    }
    // Filter on price
    if (minPrice && maxPrice) {
        andConditons.push({
            price: {
                gte: Number(minPrice),
                lte: Number(maxPrice),
            },
        });
    }
    else if (minPrice) {
        andConditons.push({
            price: {
                gte: Number(minPrice),
            },
        });
    }
    else if (maxPrice) {
        andConditons.push({
            price: {
                lte: Number(maxPrice),
            },
        });
    }
    const whereConditons = andConditons.length > 0 ? { AND: andConditons } : {};
    const result = yield prisma_1.default.book.findMany({
        where: whereConditons,
        skip,
        take: size,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: { category: true },
    });
    const total = yield prisma_1.default.book.count();
    const totalPage = Math.ceil(total / size);
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Book fetched failed');
    }
    return {
        meta: {
            page,
            size,
            total,
            totalPage,
        },
        data: result,
    };
});
//update
const updateBookService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.update({
        where: {
            id,
        },
        data: payload,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Book update failed');
    }
    return result;
});
//delete
const deleteBookService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.delete({
        where: {
            id,
        },
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Book delete failed');
    }
    return result;
});
exports.BookService = {
    createBookService,
    getBooksService,
    getBookService,
    getBookByCategoryIdService,
    updateBookService,
    deleteBookService,
};
