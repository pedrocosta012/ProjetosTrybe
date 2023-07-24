const { salesServices } = require('../services');

const getAllSales = async (_req, res) => {
  const result = await salesServices.passAlongReq();
  res.status(200).json(result);
};

const postNewSale = async (req, res) => {
  const { body } = req;
  const { createdSale, error } = await salesServices.handleDataToPost(body);
  if (error) {
    res.status(error.status).json({ message: error.message });
  }
  res.status(201).json(createdSale);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { foundSale, error } = await salesServices.handleIdToGet(id);
  if (error) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(200).json(foundSale);
};

module.exports = { postNewSale, getAllSales, getSaleById };
