import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import type { Handler } from 'express';
import { sendRegisterEmail } from '../services/email';
import {
  badRequest,
  User,
  validateLoginAccBody,
  validateRegisterAccBody,
} from '../validation/index.validation';

const client = new PrismaClient();

export const registerAcc: Handler = async (req, res) => {
  const validate = validateRegisterAccBody(req.body);
  if (!validate.success) return badRequest(res, validate.error);
  const { email, pwd, username } = req.body as User;
  await client.user.create({ data: { email, pwd: await hash(pwd, 10), username } });
  // await sentEmai
  res.end();
};

export const deleteAcc: Handler = (req, res) => {
  const validate = validateLoginAccBody(req.body);
  if (!validate.success) return badRequest(res, validate.error);
  console.log(req.body);
  res.end();
};

export const loginAcc: Handler = (req, res) => {
  const validate = validateLoginAccBody(req.body);
  if (!validate.success) return badRequest(res, validate.error);
  console.log(req.body);
  res.end();
};

export const logoutAcc: Handler = (req, res) => {
  res.end();
};

export const confirmRegisteration: Handler = (req, res) => {
  const id = req.params.id;
  res.send(id).end();
};
