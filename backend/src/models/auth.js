import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const authSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "Member",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("auth", authSchema);
