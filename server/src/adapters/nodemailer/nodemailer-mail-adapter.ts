import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

require('dotenv').config()
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.USERNAME_EMAIL,
      pass: process.env.PASSWORD_EMAIL
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
   async sendMail({subject, body}:SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedback <suporte@feedback.com>',
        to: 'Tao Hansen <taohansens@gmail.com>',
        subject,
        html: body
    })
   };
}