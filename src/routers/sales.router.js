const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validateId, validatePostProduct } = require('../middlewares');

const router = express.Router();

router.get('/', salesController.getAllSales);

router.get('/:id', validateId, salesController.getSaleById);

router.post('/', validatePostProduct, salesController.postNewSale);

module.exports = router;
