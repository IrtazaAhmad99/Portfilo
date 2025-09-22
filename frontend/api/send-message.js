import mongoose from "mongoose"
import nodemailer from "nodemailer"
import ENV from "../environmet.js";

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true } 
);

const Message= mongoose.model("Message", messageSchema);

async function connectDB() {
    await mongoose.connect(ENV.MONGO_URI)
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    // 1) Connect to MongoDB + save message
    await connectDB();
    await Message.create({ name, email, message });

    // 2) Setup mail transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3) Send email
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact Form: ${name}`,
      text: message,
    });

    return res
      .status(200)
      .json({ success: true, message: "Message saved & email sent!" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message });
  }
}