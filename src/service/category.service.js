const { Category } = require('../models');

const addCategory = async (name) => {
  const createdData = await Category.create({ name });
  const result = { id: createdData.null, name };
  return { result };
};

const getCategories = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = { addCategory, getCategories };
