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
    image: Array,
    desc: {
      type: String,
    },
    quantity: {
      type: Number,
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
    inventoryStatus: {
      type: String,
      enum: ["INSTOCK", "LOWSTOCK", "OUTOFSTOCK"],
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
  switch (true) {
    case this.quantity <= 0:
      this.inventoryStatus = "OUTOFSTOCK";
      break;
    case this.quantity <= 10:
      this.inventoryStatus = "LOWSTOCK";
      break;
    default:
      this.inventoryStatus = "INSTOCK";
  }
  next();
});

export default mongoose.model("Product", productSchema);
