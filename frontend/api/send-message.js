import mongoose from "mongoose";
import nodemailer from "nodemailer";
import ENV from "../environmet.js"

// ----- MongoDB Message Schema -----
const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent model overwrite in serverless environment
const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

// ----- MongoDB Connection Caching -----
let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(ENV.MONGO_URI).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// ----- Serverless Function -----
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // 1️⃣ Connect to MongoDB & save message
    await connectDB();
    await Message.create({ name, email, message });

    // 2️⃣ Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: ENV.EMAIL_USER, // Your Gmail address
        pass: ENV.EMAIL_PASS, // App password
      },
    });

    // 3️⃣ Send email
    await transporter.sendMail({
      from: email,
      to: ENV.EMAIL_USER,
      subject: `Portfolio Contact Form: ${name}`,
      text: message,
    });

    // ✅ Success
    return res.status(200).json({ success: true, message: "Message saved & email sent!" });

  } catch (error) {
    console.error("Serverless function error:", error); // Log the error
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
