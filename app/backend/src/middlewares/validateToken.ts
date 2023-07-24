import { NextFunction, Request, Response } from 'express';
import { decryptToken } from '../utils/encryptDecryptToken';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  if (typeof decryptToken(authorization) === 'string') {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  next();
};
