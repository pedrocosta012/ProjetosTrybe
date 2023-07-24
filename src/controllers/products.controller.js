const { productsService } = require('../services');

const getAllProducts = async (_req, res) => {
  const result = await productsService.findAll();
  res.status(200).json(result);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { product, message } = await productsService.thisProductExists(id);
  if (message) {
    res.status(404).json({ message });
  } else {
    res.status(200).json(product);
  }
};

const postProduct = async (req, res) => {
  const { name } = req.body;
  const { createdProduct, message } = await productsService.addNewProduct(name);
  if (message) {
    res.status(422).json({ message });
  } else {
    res.status(201).json(createdProduct);
  }
};

const putProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { updatedProduct, error } = await productsService.updateProduct({ id, name });
  if (error) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(200).json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { isDeleted, error } = await productsService.handleDataToDelete(Number(id));
  if (isDeleted) return res.status(204).end();
  res.status(error.status).json({ message: error.message });
};

module.exports = { getAllProducts, getProductById, postProduct, putProduct, deleteProduct };
