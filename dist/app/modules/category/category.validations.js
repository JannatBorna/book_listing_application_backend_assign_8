"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Z: Category title is required',
        }),
    }),
});
//updated
const update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
    }),
});
exports.categoryValidation = {
    create,
    update,
};
