import { Router } from 'express';
import carRoutes from './cars.routes';
import motorcyclesRoutes from './motorcycles.routes';

const router = Router();

router.use(carRoutes);
router.use(motorcyclesRoutes);

export default router;
