import { NextFunction, Request, Response } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const requiredFields = ['homeTeam', 'homeTeamGoals', 'awayTeam', 'awayTeamGoals'];
  if (!requiredFields.every((field) => Object.keys(data).includes(field))) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
};
