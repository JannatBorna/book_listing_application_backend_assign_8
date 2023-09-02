import { z } from 'zod';

export const signUpZod = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Z: Name is required',
    }),
    email: z.string({
      required_error: 'Z: Email is required',
    }),
    password: z.string({
      required_error: 'Z: Password is required',
    }),
    role: z.string({
      required_error: 'Z: Role is required',
    }),
    contactNo: z.string({
      required_error: 'Z: Contact number is required',
    }),
    address: z.string({
      required_error: 'Z: Address is required',
    }),
    profileImg: z.string({
      required_error: 'Z: Profile image link is required',
    }),
  }),
});

export const signInZod = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Z: Email is required',
    }),
    password: z.string({
      required_error: 'Z: Password is required',
    }),
  }),
});
