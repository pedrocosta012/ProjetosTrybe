import { Request, Response } from 'express';
import teamsService from '../services/teams.service';

export default class teamsController {
  static async getAll(_req: Request, res: Response) {
    const teams = await teamsService.getAll();
    return res.status(200).json(teams);
  }

  static async getTeam(req: Request, res: Response) {
    const { id } = req.params;
    const team = await teamsService.getTeam(Number(id));
    return res.status(200).json(team);
  }
}
