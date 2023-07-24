import * as Jwt from 'jsonwebtoken';
import 'dotenv/config';

type Payload = {
  email: string,
  username: string,
  role: string
};

const config: Jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const secret = process.env.JWT_SECRET as string;

export function generateToken(payload: Payload): string {
  return Jwt.sign(payload, secret, config);
}

export function decryptToken(token: string) {
  try {
    const { username, email, role } = Jwt.verify(token, secret) as Payload;
    return { username, email, role };
  } catch (error) {
    return JSON.stringify(error);
  }
}
