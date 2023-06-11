import Color from "../models/colors";

export const get = async (req, res) => {
  try {
    if (req.params.id) {
      const color = await Color.findById(req.params.id);
      if (!color) {
        return res.status(404).json({ message: "product not found" });
      }
      return res.status(200).json({ message: "product found", color });
    }
    const colors = await Color.find({});
    if (colors.length === 0) {
      return res.status(404).json({ message: "products not found" });
    }
    return res.status(200).json({ message: "products found", colors });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const create = async (req, res) => {
  try {
    const color = Color.create(req.body);
    if (!color) {
      return res.status(404).json({ message: "can't create product" });
    }

    return res.status(200).json({
      message: "create sucessfull",
      color,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
export const update = async (req, res) => {
  try {
    const color = await Color.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!color) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json({
      message: "Product updated",
      data: color,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};
export const remove = async (req, res) => {
  try {
    await Color.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({
      message: "Xóa sản phẩm thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};
