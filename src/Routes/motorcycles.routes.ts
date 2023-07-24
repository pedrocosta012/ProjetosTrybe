import { Router } from 'express';
import MotorcyclesController from '../Controllers/motorcycles.controller';
import validateMongoId from '../Middlewares/validateMongoId';

const router = Router();

router.post(
  '/motorcycles',
  (req, res) => new MotorcyclesController(req, res).registerNewMotorcycles(),
);

router.get(
  '/motorcycles/:id',
  validateMongoId,
  (req, res) => new MotorcyclesController(req, res).findTheMotorcycle(),
);

router.get(
  '/motorcycles',
  (req, res) => new MotorcyclesController(req, res).findAllMotorcycles(),
);

router.put(
  '/motorcycles/:id',
  validateMongoId,
  (req, res) => new MotorcyclesController(req, res).updateMotorcycle(),
);

export default router;
