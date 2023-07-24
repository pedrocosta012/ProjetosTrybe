import * as bcryptjs from 'bcryptjs';

const SALT = 10;
export async function encrypt(password: string) {
  const encrypted = await bcryptjs.hash(password, SALT);
  return encrypted;
}

export async function decrypt(passwordReq: string, passwordDB: string) {
  const decrypted = await bcryptjs.compare(passwordReq, passwordDB);
  return decrypted;
}
