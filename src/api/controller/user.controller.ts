import type { Handler } from 'express';
import { badRequest } from '../validation/index.validation';
import { validateUpdateUserBody } from '../validation/index.validation';

export const updateUser: Handler = (req, res) => {
  const validate = validateUpdateUserBody(req.body);
  if (!validate.success) return badRequest(res, validate.error);
  res.end();
};
