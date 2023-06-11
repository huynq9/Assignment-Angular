<<<<<<< HEAD
import authSchema from "../models/auth";
import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/user";

const salt = bcrypt.genSaltSync(10);

const userSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().default("Member"),
  password: Joi.string().min(6).required().messages({
    "string.min": "Mật khẩu không hợp lệ",
    "string.empty": "Trường dữ liệu bắt buộc",
  }),
  confirmPassword: Joi.ref("password"),
});

export const signup = async (req, res) => {
  try {
    const body = req.body;
    const { error } = userSchema.validate(body);
    if (error) {
      res.status(400).send({
        message: error.details[0].message,
      });
    } else {
      const hash = bcrypt.hashSync(body.password, salt);
      const data = await authSchema.create({ ...body, password: hash });
      res.send({
        message: "Đăng kí thành công",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};

const userSigninSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const signin = async (req, res) => {
  try {
    const body = req.body;
    const { error } = userSigninSchema.validate(body);
    if (error) {
      res.status(400).send({
        message: error.details[0].message,
      });
    }
    const user = await authSchema.findOne({ email: body.email });
    if (!user) {
      return res.status(400).send({
        message: "Tên đăng nhập hoặc mật khẩu sai",
      });
    }
    const isValidate = bcrypt.compareSync(body.password, user.password);
    if (!isValidate) {
      return res.status(400).send({
        message: "Tên đăng nhập hoặc mật khẩu sai",
      });
    }
    const accessToken = jwt.sign({ _id: user._id }, "123456", {
      expiresIn: "5m",
    });
    res.send({
      message: "Đăng nhập thành công",
      data: {
        user,
        accessToken,
      },
    });
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};
=======
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/auth";
import { signinSchema, signupSchema } from "../schemas/auth";
export const signup = async (req, res) => {
  try {
    // validate đầu vào
    // const { error } = signupSchema.validate(req.body, { abortEarly: false });
    // if (error) {
    //   const errors = error.details.map((err) => err.message);

    //   return res.status(400).json({
    //     messages: errors,
    //   });
    // }
    // Kiểm tra trong db có tk không?
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).json({
        messages: "Email đã tồn tại",
      });
    }
    // Mã hóa mật khẩu

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, "hhhhhh", { expiresIn: "1d" });
    user.password = undefined;
    return res.status(201).json({
      message: "Tạo tài khoản thành công",
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
// B1: Kiểm tra thông tin req.body có hợp lệ hay không
// B2: Kiểm tra email đã tồn tại hay chưa?
// B2.1: Mã hóa mật khẩu trước khi tạo user mới
// B3: Tạo user mới
// B4: Tạo token mới chứa id của user
// B5: Trả về client

export const signin = async (req, res) => {
  try {
    // const { error } = signinSchema.validate(req.body, { abortEarly: false });
    // if (error) {
    //   const errors = error.details.map((err) => err.message);

    //   return res.status(400).json({
    //     messages: errors,
    //   });
    // }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        messages: "Email không tồn tại",
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        messages: "Sai mật khẩu",
      });
    }
    const token = jwt.sign({ id: user._id }, "hhhhhh", { expiresIn: "1d" });
    user.password = undefined;
    return res.status(200).json({
      message: "Đăng nhập thành công",
      accessToken: token,
      user,
    });
  } catch (error) {}
};
// Đăng nhập
// B1: Kiểm tra thông tin req.body có hợp lệ hay không
// B2: Kiểm tra email đã tồn tại hay chưa?
// B2.1: So sánh password client với password trong db
// B3: Tạo token mới chứa id của user
// B4: Trả về client
>>>>>>> d5b22b7c75071071f5c481e96a256a1ce2109071
