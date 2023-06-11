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
