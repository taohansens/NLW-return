import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

require("dotenv").config();
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "108235538223b1",
    pass: "8f34694432ae2c",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedback <suporte@feedback.com>",
      to: "Tao Hansen <taohansens@gmail.com>",
      subject,
      html: body,
    });
  }
}
