import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("Server Running"));

console.log(process.env.EMAIL);
console.log(process.env.EMAIL_PASSWORD);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Error verifying email transport: ", error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      res.json(error);
    } else {
      console.log("Email sent: ", info.response);
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
