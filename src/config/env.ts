import dotenv from "dotenv";

dotenv.config();

const rawPort = Number(process.env.PORT);

export const ENV = {
  PORT: Number.isFinite(rawPort) ? rawPort : 5000,
  DATABASE_URL: process.env.DATABASE_URL || "",
  NODE_ENV: process.env.NODE_ENV || "development",
};
