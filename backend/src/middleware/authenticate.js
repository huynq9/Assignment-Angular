import jwt from "jsonwebtoken";
import User from "../models/user";

const authenticate = async (req, res, next) => {
  try {
    let accessToken = req.headers.authorization;
    accessToken = accessToken && accessToken.split(" ")[1];
    if (!accessToken) {
      return res.status(400).json({
        message: "Bạn chưa đăng nhập",
      });
    }

    const { _id } = jwt.verify(accessToken, "123456");
    const user = await User.findById(_id);
    if (user.role !== "Admin") {
      return res.status(400).json({
        message: "Bạn không có quyền",
      });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};

export default authenticate;
