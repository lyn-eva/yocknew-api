import { Response } from 'express';
import { ZodError } from 'zod';

export const badRequest = (res: Response, error: ZodError) => {
  const errors = error.issues.reduce((obj, e) => {
    if (e.code === 'unrecognized_keys') return { ...obj, [e.keys[0]]: 'Unnecessory' };
    return { ...obj, [e.path[0]]: e.message };
  }, {});
  res.json({ status: 400, errors }).end();
};

export * from './item.validation';
export * from './user.validation';
export * from './auth.validation';
