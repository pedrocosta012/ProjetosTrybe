const { productsModel } = require('../models');

const findAll = async () => {
  const result = await productsModel.findAll();
  return result;
};

const thisProductExists = async (id) => {
  const product = await productsModel.giveProduct(id);
  if (!product) {
    return { message: 'Product not found' };
  }
  return { product };
};

const addNewProduct = async (name) => {
  if (name.length < 5) {
    return { message: '"name" length must be at least 5 characters long' };
  }
  const createdProduct = await productsModel.pushNewProduct(name);
  return { createdProduct };
};

const updateProduct = async (data) => {
  const ids = (await productsModel.findAll()).map((p) => p.id);
  if (data.name.length < 5) {
    return { error: { status: 422, message: '"name" length must be at least 5 characters long' } };
  }
  if (ids.includes(Number(data.id))) {
    const result = await productsModel.altAProduct(data);
    return { updatedProduct: result };
  }
  return { error: { status: 404, message: 'Product not found' } };
};

const handleDataToDelete = async (id) => {
  const ids = (await productsModel.findAll()).map((p) => p.id);
  if (!ids.includes(id)) {
    return { error: { status: 404, message: 'Product not found' } };
  }
  const isDeleted = await productsModel.deleteAProduct(id);
  return { isDeleted };
};

module.exports = { thisProductExists, findAll, addNewProduct, updateProduct, handleDataToDelete };
