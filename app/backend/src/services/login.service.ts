import { decryptToken, generateToken } from '../utils/encryptDecryptToken';
import User from '../database/models/User';
import { decrypt } from '../utils/encryptDecryptPassword';

type LoginReturn = { error?: { status: number, message: string }, token?: string };
type LoginValidate = { error?: { status: number, message: string }, role?: string };

const error = { error: { status: 401, message: 'Incorrect email or password' } };

export default class LoginService {
  static async login(emailReq: string, password: string): Promise<LoginReturn> {
    const user = await User.findOne({ where: { email: emailReq } });
    if (!user) {
      return error;
    }
    const resolvePassword = await decrypt(password, user.dataValues.password);
    if (!resolvePassword) {
      return error;
    }
    const { username, email, role } = user.dataValues;
    return { token: generateToken({ username, email, role }) };
  }

  static async validate(
    authorization: string,
  ): Promise<LoginValidate> {
    const data = decryptToken(authorization);
    if (typeof data === 'string') {
      return { error: { status: 401, message: 'Invalid token' } };
    }
    const { role } = data;
    return { role };
  }
}
