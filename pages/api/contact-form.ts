import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

const sendGridApiKey = process.env.SENDGRID_API_KEY;

if (!sendGridApiKey) {
  throw new Error("SENDGRID_API_KEY is not defined in environment variables.");
}

sgMail.setApiKey(sendGridApiKey);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const supportMail = process.env.SUPPORT_MAIL;
    const officialMail = process.env.OFFICIAL_MAIL;

    if (!supportMail || !officialMail) {
      throw new Error("SUPPORT_MAIL or OFFICIAL_MAIL is not defined in environment variables.");
    }

    const msg = {
      to: supportMail,
      from: officialMail,
      subject: `skillzl.dev - Contact Us Form | ${subject}`,
      text: message,
      html: `
        <strong>From:</strong> ${name} (${email})<br/>
        <strong>Message:</strong><br/>
        ${message}
        <br />
        <br />
      `,
    };

    try {
      await sgMail.send(msg);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} not allowed.`);
  }
};