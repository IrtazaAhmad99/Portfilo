import dotenv from "dotenv";
dotenv.config();
          

const ENV = {
  MONGO_URI: process.env.MONGO_URI,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
};
export default ENV