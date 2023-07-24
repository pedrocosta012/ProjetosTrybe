import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import ITokenData from '../interfaces/tokenData.interface';

dotenv.config();

export function createToken({ username, classe }: ITokenData): string {
  const config = {
    algorithm: 'HS256',
    expiresIn: '1d',
  };
  const token = jwt.sign(
    { username, classe },
    process.env.JWT_SECRET as Secret,
    config as SignOptions,
  );
  return token;
}

export function validateToken({ username, classe }: ITokenData) {
  return { username, classe };
}
