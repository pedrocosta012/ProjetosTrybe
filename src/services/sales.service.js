const { productsModel, salesModel } = require('../models');

const passAlongReq = async () => {
  const result = await salesModel.findAllSales();
  return result;
};

const handleIdToGet = async (id) => {
  // continuar daqui
  // array que vai conter os ids disponiveis
  if (Number.isNaN(Number(id))) {
    return { error: { status: 404, message: '"id" must be a number' } };
  }
  const ids = (await salesModel.findAllSales()).map((p) => p.productId);
  if (!ids.includes(Number(id))) {
    return { error: { status: 404, message: 'Sale not found' } };
  }
  const foundSale = await salesModel.findSaleById(id);
  return { foundSale };
};

const handleDataToPost = async (data) => {
  const restredProductsIds = (await productsModel.findAll()).map((p) => p.id);

  if (!data.every((p) => restredProductsIds.includes(p.productId))) {
    return { error: { status: 404, message: 'Product not found' } };
  }

  const createdSale = await salesModel.createSale(data);

  return { createdSale, error: null };
};

module.exports = { handleDataToPost, passAlongReq, handleIdToGet };
