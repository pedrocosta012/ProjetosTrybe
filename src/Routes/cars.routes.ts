import { Router } from 'express';
import CarsController from '../Controllers/cars.controller';
import carFieldsValidator from '../Middlewares/carFieldsValidator';
import validateMongoId from '../Middlewares/validateMongoId';

const router = Router();

router.post(
  '/cars',
  carFieldsValidator,
  (req, res) => new CarsController(req, res).registerNewCar(),
);

router.get(
  '/cars/:id',
  validateMongoId,
  (req, res) => new CarsController(req, res).findOne(),
);

router.get(
  '/cars',
  (req, res) => new CarsController(req, res).findAll(),
);

router.put(
  '/cars/:id',
  validateMongoId,
  (req, res) => new CarsController(req, res).updateACar(),
);

export default router;
