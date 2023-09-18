"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserZod = void 0;
const zod_1 = require("zod");
exports.updateUserZod = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        profileImg: zod_1.z.string().optional(),
    }),
});
