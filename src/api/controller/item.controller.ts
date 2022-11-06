import type { Handler } from 'express';
import {
  badRequest,
  validateCreateItemBody,
  validateUpdateItemBody,
} from '../validation/index.validation';

export const getItems: Handler = async (req, res) => {
  res.end();
};

export const createItem: Handler = async (req, res) => {
  const validate = validateCreateItemBody(req.body);
  if (!validate.success) return badRequest(res, validate.error);
  res.end();
};

export const updateItem: Handler = async (req, res) => {
  const validate = validateUpdateItemBody(req.body);
  if (!validate.success) return badRequest(res, validate.error);
  res.end();
};

export const deleteItem: Handler = async (req, res) => {
  res.end();
};
