import Categories from "../models/categories";

export const get = async (req, res) => {
  try {
    if (req.params.id) {
      const category = await Categories.findById(req.params.id).populate(
        "products"
      );
      if (!category) {
        return res.status(404).json({
          message: "category not found",
        });
      }
    }
    const categories = await Categories.find({});
    if (categories.length === 0) {
      return res.status(404).json({
        message: "categories not found",
      });
    }
    return res.status(200).json({
      message: "categories found",
      categories,
    });
  } catch (error) {}
};

export const create = async (req, res) => {
  try {
    const category = await Categories.create(req.body);
    if (!category) {
      return res.status(400).json({
        message: "Không thể tạo danh mục",
      });
    }
    return res.status(201).json({
      message: "Category created",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const category = await Categories.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Sản phẩm đã được xóa thành công",
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const category = await Categories.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!category) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Sản phẩm đã được cập nhật thành công",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
