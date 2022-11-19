import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';
// const nodemailer = require('nodemailer');

export const sendRegisterEmail = ({ username, email, token }: SRE) => {
  const url = `http://localhost:5000/api/v1/auth/confirm?token=${token}`;
  const options = {
    to: email,
    subject: 'Confirm email for Yocknew API',
    html: `Hi ${username}, Thank you for registering!! Please confirm your registration through the link <a target='_blank' href="${url}">${url}</a>`,
  };
  return sendEmail(options);
};

const sendEmail = async (options: MailOptions) => {
  // connect with gmail
  const transporter = createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_AUTH_USER, pass: process.env.EMAIL_AUTH_PASS },
  });

  return transporter.sendMail(
    // from: '"Yocknew" <no-reply@yocknew.com>',
    options
  );
};

interface SRE {
  username: string;
  email: string;
  token: string;
}
