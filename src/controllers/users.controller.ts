import { Request, Response } from 'express';
import IError from '../interfaces/error.interface';
import IUser from '../interfaces/user.interface';
import usersService from '../services/users.service';

async function addNewUser(req: Request, res: Response) {
  const { username, classe, level, password } = req.body as IUser;
  const {
    result, error,
  }: {
    result?: IUser, error?: IError
  } = await usersService.addAUser({ username, classe, level, password });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  res.status(201).json(result);
}

const toExport = { addNewUser };

export default toExport;
