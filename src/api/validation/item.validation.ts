import { z } from 'zod';

export const validateCreateItemBody = (body: any) => {
  return schema.safeParse(body);
};

export const validateUpdateItemBody = (body: any) => {
  return schema.partial().omit({ userId: true, endAt: true }).safeParse(body);
};

const schema = z
  .object({
    title: z.string(),
    endAt: z.number(),
    userId: z.string(),
    descr: z.string().optional(),
    img: z.array(z.string()),
    category: z.array(z.string()),
  })
  .strict();
