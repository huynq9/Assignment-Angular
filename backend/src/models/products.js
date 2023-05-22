import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const sizeSchema = new mongoose.Schema({
  size: { type: String },
  quantity: { type: Number },
});
const colorSchema = new mongoose.Schema({
  color: { type: String },
  sizes: [sizeSchema],
});
const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    price_sale: Number,
    sale_offer: Number,
    description: String,
    description_short: String,
    imgUrl: [{ String }],
    isPublic: { type: Boolean, default: true },
    colors: [colorSchema],
    categoryId: { type: mongoose.Types.ObjectId, ref: "Categories" },
  },
  { timestamps: true, versionKey: false }
);
productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema);
