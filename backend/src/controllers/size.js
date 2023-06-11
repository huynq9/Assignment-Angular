import Size from "../models/sizes";

export const get = async (req, res) => {
  try {
    if (req.params.id) {
      const size = await Size.findById(req.params.id);
      if (!size) {
        return res.status(404).json({ message: "product not found" });
      }
      return res.status(200).json({ message: "product found", size });
    }
    const sizes = await Size.find({});
    if (sizes.length === 0) {
      return res.status(404).json({ message: "products not found" });
    }
    return res.status(200).json({ message: "products found", sizes });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const create = async (req, res) => {
  try {
    const size = Size.create(req.body);
    if (!size) {
      return res.status(404).json({ message: "can't create product" });
    }

    return res.status(200).json({
      message: "create sucessfull",
      size,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
export const update = async (req, res) => {
  try {
    const size = await Size.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!size) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json({
      message: "Product updated",
      data: size,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};
export const remove = async (req, res) => {
  try {
    await Size.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({
      message: "Xóa sản phẩm thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};
