import mongoose from "mongoose";
import { URI } from "./config.js";

export const connectionDB = mongoose
  .connect(URI)
  .then(() => console.log("Connected to db"))
  .catch((e) => console.log(e, "error"));
