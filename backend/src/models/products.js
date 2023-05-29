import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

import { colorSchema } from "./colors";
import { sizeSchema } from "./sizes";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    price_sale: Number,
    sale_offer: { type: Number, default: 0 },
    description: String,
    description_short: String,
    imgUrl: [{ type: String }],
    isPublic: { type: Boolean, default: true },
    colors: [colorSchema],
    sizes: [sizeSchema],
    categoryId: { type: mongoose.Types.ObjectId, ref: "Categories" },
  },
  { timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate);

productSchema.pre("save", function (next) {
  if (this.isModified("sale_offer") || this.isModified("price")) {
    this.price_sale = this.price * (1 - this.sale_offer / 100);
  }
  next();
});
productSchema.pre("findOneAndUpdate", function (next) {
  const { sale_offer, price } = this.getUpdate();
  if (sale_offer || price) {
    const price_sale = price * (1 - sale_offer / 100);
    this.setUpdate({ ...this.getUpdate(), price_sale });
  }
  next();
});

export default mongoose.model("Product", productSchema);
