import mongoose from "mongoose";

import Product from "./products";
export const categorySchema = new mongoose.Schema(
  {
    name: String,
    imgUrl: String,
    products: [{ type: String, ref: "Product" }],
  },
  { timestamp: true, versionKey: false }
);
export default mongoose.model("Categories", categorySchema);
