import { sign, verify } from 'jsonwebtoken';

export function generateJwt({ payload = {}, type }: GJWT) {
  return sign(payload, secret(type), { expiresIn: '30m' });
}

export function verifyJwt({ token, type }: VJWT) {
  return verify(token, secret(type));
}

const secret = (type: string) =>
  (type === 'COOKIE' ? process.env.JWT_COOKIE_SECRET : process.env.JWT_TOKEN_SECRET) as string;

interface GJWT {
  payload?: {};
  type: 'TOKEN' | 'COOKIE';
}

interface VJWT {
  token: string;
  type: 'TOKEN' | 'COOKIE';
}
