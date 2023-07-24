const categoryService = require('../service/category.service');

const addNewCategory = async (req, res) => {
  const { name } = req.body;
  const { authorization } = req.headers;
  const { result, error } = await categoryService.addCategory(name, authorization);
  if (error) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(201).json(result);
};

const getAllCategories = async (_req, res) => {
  const dbResponse = await categoryService.getCategories();
  res.status(200).json(dbResponse);
};

module.exports = { addNewCategory, getAllCategories };
