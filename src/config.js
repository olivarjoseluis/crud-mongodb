import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 9000;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const URI = process.env.URI;
