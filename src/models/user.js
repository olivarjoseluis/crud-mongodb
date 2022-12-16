import mongoose, { Schema } from "mongoose";

export const userModel = mongoose.model(
  "User",
  Schema({
    name: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  })
);
