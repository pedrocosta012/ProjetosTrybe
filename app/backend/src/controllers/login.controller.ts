import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const { token, error } = await LoginService.login(email, password);
    if (error) {
      return res.status(error.status).json({ message: error.message });
    }
    res.status(200).json({ token });
  }

  static async validate(req: Request, res: Response) {
    const { authorization } = req.headers;
    const { role, error } = await LoginService.validate(authorization as string);
    if (error) {
      return res.status(error.status).json({ message: error.message });
    }
    res.status(200).json({ role });
  }
}
