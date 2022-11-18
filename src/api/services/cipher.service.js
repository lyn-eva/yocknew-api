// import { createCipheriv, createDecipheriv } from 'crypto';
const { createCipheriv, createDecipheriv, randomBytes } = require('crypto');

const cipher = createCipheriv(
  '',
  // 'f97dcb9045e930a105910cddc62d5c8a57d7d1a683f7f6a64c982ea3d44f05b3',
  // '2d11b0edb4bdf36d2f00342511f07f9d'
  randomBytes(32),
  randomBytes(15)
);

const confirmId = cipher.update('florish', 'utf-8', 'hex');
console.log(confirmId);
