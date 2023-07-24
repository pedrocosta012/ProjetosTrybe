import express from 'express';
import productsRoutes from './products.routes';
import usersRoutes from './users.routes';
import ordersRoutes from './orders.routes';

const router = express.Router();

router.use('/products', productsRoutes);

router.use('/users', usersRoutes);

router.use('/orders', ordersRoutes);

export default router;
