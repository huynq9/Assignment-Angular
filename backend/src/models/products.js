import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

import { colorSchema } from "./colors";
import { sizeSchema } from "./sizes";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: {
      type: Number,
    },
    price_sale: {
      type: Number,
      default: 0,
    },
    sale_offer: {
      type: Number,
      default: 0,
    },
    desc: {
      type: String,
    },
    isFavorited: {
      type: Boolean,
      default: false,
    },
    isInvisible: {
      type: Boolean,
      default: true,
    },
    isNew: {
      type: Boolean,
      default: true,
    },
    categoryId: {
      type: String,
      ref: "Categories",
    },
  },
  { timestamps: true, versionKey: false }
);

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
