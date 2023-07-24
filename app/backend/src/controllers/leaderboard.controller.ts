import { Request, Response } from 'express';
import leaderboardService from '../services/leaderboard.service';

export default class leaderboardController {
  static async teamsData(req: Request, res: Response) {
    const { path } = req;
    const data = await leaderboardService.teamsData(path);
    res.status(200).json(data);
  }
}
