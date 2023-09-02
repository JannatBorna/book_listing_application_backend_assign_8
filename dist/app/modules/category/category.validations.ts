import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Z: Category title is required',
    }),
  }),
});

//updated
const update = z.object({
  body: z.object({
    title: z.string().optional(),
  }),
});

export const categoryValidation = {
  create,
  update,
};
