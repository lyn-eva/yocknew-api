import { z } from 'zod';

export const validateRegisterAccBody = (body: any) => {
  return schema.safeParse(body);
};

export const validateLoginAccBody = (body: any) => {
  return schema.omit({ username: true }).safeParse(body);
};

const schema = z
  .object({
    username: z.string(),
    email: z.string().email(),
    pwd: z.string(),
  })
  .strict();

export type User = z.infer<typeof schema>;
