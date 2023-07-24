const express = require('express');
const productsController = require('../controllers/products.controller');
const { validateId, validateName } = require('../middlewares');

const router = express.Router();

router.get('/', productsController.getAllProducts);

router.get('/:id', validateId, productsController.getProductById);

router.post('/', validateName, productsController.postProduct);

router.put('/:id', validateId, validateName, productsController.putProduct);

router.delete('/:id', validateName, productsController.deleteProduct);

module.exports = router;
