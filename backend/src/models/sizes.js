import mongoose from "mongoose";

export const sizeSchema = new mongoose.Schema({
  size: { String },
  quantity: Number,
});

export default mongoose.model("Sizes", sizeSchema);
