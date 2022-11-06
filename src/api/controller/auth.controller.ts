import type { Handler } from 'express';
import {
  badRequest,
  validateLoginAccBody,
  validateRegisterAccBody,
} from '../validation/index.validation';

export const registerAcc: Handler = (req, res) => {
  const validate = validateRegisterAccBody(req.body);
  if (!validate.success) return badRequest(res, validate.error);
  res.end();
};

export const deleteAcc: Handler = (req, res) => {
  const validate = validateLoginAccBody(req.body);
  if (!validate.success) return badRequest(res, validate.error);
  res.end();
};

export const loginAcc: Handler = (req, res) => {
  const validate = validateLoginAccBody(req.body);
  if (!validate.success) return badRequest(res, validate.error);
  res.end();
};

export const logoutAcc: Handler = (req, res) => {
  res.end();
};
