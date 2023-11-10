"use server";

import { createTransport } from "nodemailer";

type SendMailOptions = {
  mail: string;
  subject: string;
  message: string;
};

export default async function sendMail({
  mail,
  subject,
  message,
}: SendMailOptions) {
  const transport = createTransport({
    host: process.env.SMTP_HOST ?? "",
    port: Number(process.env.SMTP_PORT) ?? 0,
    auth: {
      user: process.env.SMTP_USER ?? "",
      pass: process.env.SMTP_PASSWORD ?? "",
    },
  });

  const result = await transport.sendMail({
    to: process.env.EMAIL_TO ?? "",
    from: {
      name: mail,
      address: process.env.EMAIL_FROM ?? "",
    },
    subject,
    text: message,
  });

  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length > 0) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
}
