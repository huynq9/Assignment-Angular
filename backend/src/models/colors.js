import mongoose from "mongoose";

export const colorSchema = new mongoose.Schema({
  color: { String },
  quantity: Number,
});

export default mongoose.model("Color", colorSchema);
