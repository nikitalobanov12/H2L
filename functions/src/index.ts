import functions from "firebase-functions";
import nodemailer from "nodemailer";

// Set up your email credentials
const gmailEmail = "nikitaalobanovv@gmail.com";
const gmailPassword = "NcIaB123";

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmail = functions.https.onRequest(
  async (
    req: { method: string; body: { name: any; email: any; message: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: { (arg0: string): void; new (): any };
      };
    }
  ) => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const { name, email, message } = req.body;

    const mailOptions = {
      from: email,
      to: gmailEmail,
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      await mailTransport.sendMail(mailOptions);
      res.status(200).send("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    }
  }
);
