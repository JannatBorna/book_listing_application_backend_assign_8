"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Z: Book title is required',
        }),
        author: zod_1.z.string({
            required_error: 'Z: Author name is required',
        }),
        genre: zod_1.z.string({
            required_error: 'Z: Genre is required',
        }),
        price: zod_1.z.number({
            required_error: 'Z: Price is required',
        }),
        publicationDate: zod_1.z.string({
            required_error: 'Z: Publication date is required',
        }),
        categoryId: zod_1.z.string({
            required_error: 'Z: Category id is required',
        }),
    }),
});
exports.BookValidation = {
    create,
};
