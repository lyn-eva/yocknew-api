import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';
const nodemailer = require('nodemailer');

export const sendRegisterEmail = ({ username, email }: { username: string; email: string }) => {
  const html = `Hi ${username}, Thank you for registering!! Please confirm your registration through the link <a target='_blank'></a>`;
  return sendEmail({ to: email, subject: 'Confirm email for Yocknew API' });
};
const sendEmail = async (options: MailOptions) => {
  // connect with gmail
  const transporter = createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_AUTH_USER, pass: process.env.EMAIL_AUTH_PASS },
  });

  const info = await transporter.sendMail({
    // from: '"Yocknew" <no-reply@yocknew.com>',
    subject: 'testing email',
    text: 'Testing succeeded',
    ...options,
  });
};
