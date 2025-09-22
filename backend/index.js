import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import mongoose from "mongoose";
import ENV from "./environment.js";
import Message from "./schema.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ connect to MongoDB
mongoose.connect(ENV.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ route for contact form
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1️⃣ Save to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // 2️⃣ Send Email to YOUR Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: ENV.EMAIL_USER, // your Gmail address
        pass: ENV.EMAIL_PASS, // your App Password (not normal Gmail pass!)
      },
    });

    await transporter.sendMail({
      from: ENV.EMAIL_USER,     // email will be sent from YOUR Gmail
      to: ENV.EMAIL_USER,       // you receive it in your Gmail inbox
      subject: `📩 New Message from ${name}`,
      text: `You have a new message from your portfolio website:Name: ${name} Email: ${email} Message: ${message} You can reply directly to this email: ${email}
      `,
      replyTo: email, // 🔑 Important: lets you reply directly to client
    });

    res.json({ success: true, message: "Message stored & email sent!" });
  } catch (err) {
    console.error("Error in send-message route:", err);
    res.status(500).json({ success: false, message: "Failed to process message" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));





