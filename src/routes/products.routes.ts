import express from 'express';
import productsController from '../controllers/products.controller';

const router = express.Router();

router.get('/', productsController.getAllProducts);

router.post('/', productsController.addNewProduct);

export default router;
