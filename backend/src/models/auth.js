import mongoose from "mongoose";
<<<<<<< HEAD
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
=======

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "member",
  },
});
export default mongoose.model("User", userSchema);
>>>>>>> d5b22b7c75071071f5c481e96a256a1ce2109071
