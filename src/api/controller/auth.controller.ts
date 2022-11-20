import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import type { Handler } from 'express';
import { sendRegisterEmail } from '../services/email.service';
import { generateJwt, verifyJwt } from '../services/jwt.service';
import {
  badRequest,
  User,
  validateLoginAccBody,
  validateRegisterAccBody,
} from '../validation/index.validation';
import {
  createCookie,
  respondAlreadyConfirmed,
  respondConfirmed,
  respondConflict,
  respondCreated,
  respondInvalidToken,
} from './util.controller';

const client = new PrismaClient();

export const registerAcc: Handler = async (req, res) => {
  const validate = validateRegisterAccBody(req.body);
  if (!validate.success) return badRequest(res, validate.error);
  const { email, pwd, username } = req.body as User;
  const alreadyExist = await client.user.findFirst({ where: { email } });
  if (alreadyExist) return respondConflict(res);
  await client.user.create({ data: { email, pwd: await hash(pwd, 10), username } });
  const token = generateJwt({ payload: { email }, type: 'TOKEN' });
  await sendRegisterEmail({ username, email, token });
  respondCreated(res);
};

export const confirmAccRegiseration: Handler = async (req, res) => {
  const { token } = req.query as { token: string };
  try {
    const { email } = verifyJwt({ token, type: 'TOKEN' }) as { email: string };
    const user = await client.user.findFirst({ where: { email } });
    if (user && user.confirmed) return respondAlreadyConfirmed(res);
    await client.user.update({
      where: { email },
      data: { confirmed: true },
    });
    respondConfirmed(createCookie(res, generateJwt({ type: 'COOKIE' })));
  } catch (error) {
    respondInvalidToken(res, (error as Error).message);
  }
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

// who wrote this garbage?
