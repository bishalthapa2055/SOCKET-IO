import * as dotenv from "dotenv";

dotenv.config();

const config = {
  app: {
    mongoUrl:
      process.env.MONGO_URI! ||
      process.env.MONGO_CONNECTION_STRING ||
      "mongodb://localhost:27017/notifi",
    host: process.env.APP_HOST || "localhost",

    port: process.env.PORT || 5555,
    allowedOrigins: process.env.ALLOWED_ORIGINS || "http://localhost:5555",

    // ||"http://localhost:8848",
  },
};

export default config;
