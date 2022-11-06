import { z } from 'zod';

export const validateUpdateUserBody = (body: any) => {
  return schema.safeParse(body);
};

const schema = z
  .object({
    username: z.string().optional(),
    img: z.string().optional(),
  })
  .strict();
