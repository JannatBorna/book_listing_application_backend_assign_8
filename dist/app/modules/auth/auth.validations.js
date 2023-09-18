"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInZod = exports.signUpZod = void 0;
const zod_1 = require("zod");
exports.signUpZod = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Z: Name is required',
        }),
        email: zod_1.z.string({
            required_error: 'Z: Email is required',
        }),
        password: zod_1.z.string({
            required_error: 'Z: Password is required',
        }),
        role: zod_1.z.string({
            required_error: 'Z: Role is required',
        }),
        contactNo: zod_1.z.string({
            required_error: 'Z: Contact number is required',
        }),
        address: zod_1.z.string({
            required_error: 'Z: Address is required',
        }),
        profileImg: zod_1.z.string({
            required_error: 'Z: Profile image link is required',
        }),
    }),
});
exports.signInZod = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'Z: Email is required',
        }),
        password: zod_1.z.string({
            required_error: 'Z: Password is required',
        }),
    }),
});
