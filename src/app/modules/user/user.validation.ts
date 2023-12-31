import { z } from 'zod';

export const updateUserZod = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    profileImg: z.string().optional(),
  }),
});
