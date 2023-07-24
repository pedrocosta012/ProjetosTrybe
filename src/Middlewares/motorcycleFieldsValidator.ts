import { NextFunction, Request, Response } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const carRequiredFields = [
    'model', 'year', 'color', 'buyValue', 'category', 'engineCapacity',
  ];
  const hasAllFields = carRequiredFields.every((field) => req.body[field]);
  if (!hasAllFields) {
    return res.status(404).json({ message: 'Existem campos importantes faltando!' });
  }
  next();
};
