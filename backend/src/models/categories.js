import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema(
  {
    name: String,
    imgUrl: String,
    products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
  },
  { timestamp: true, versionKey: false }
);
export default mongoose.model("Categories", categorySchema);
