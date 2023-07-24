import { NextFunction, Request, Response } from 'express';
import { Types } from 'mongoose';

export default (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id || !Types.ObjectId.isValid(id)) {
    return res.status(422).json({ message: 'Invalid mongo id' });
  }
  next();
};
