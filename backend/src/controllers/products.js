import Product from "../models/products";
import Categories from "../models/categories";

export const get = async (req, res) => {
  try {
    if (req.params.id) {
      const product = await Product.findById(req.params.id).populate(
        "categoryId"
      );
      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }
      return res.status(200).json({ message: "product found", product });
    }
    const products = await Product.find({});
    if (products.length === 0) {
      return res.status(404).json({ message: "products not found" });
    }
    return res.status(200).json({ message: "products found", products });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const create = async (req, res) => {
  try {
    const product = Product.create(req.body);
    if (!product) {
      return res.status(404).json({ message: "can't create product" });
    }
    await Categories.findByIdAndUpdate(product.categoryId, {
      $addToSet: {
        products: product._id,
      },
    });
    return res.status(200).json({
      message: "create sucessfull",
      product,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
export const update = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json({
      message: "Product updated",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};
export const remove = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({
      message: "Xóa sản phẩm thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};
