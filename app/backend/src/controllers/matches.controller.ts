import { Request, Response } from 'express';
import Matches from '../database/models/Matches';
import matchesService from '../services/matches.service';

export default class matchesController {
  static async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    let matches;
    if (!inProgress) {
      matches = await matchesService.getAll();
    } else if (inProgress === 'true') {
      matches = await matchesService.getSpecific(1);
    } else if (inProgress === 'false') {
      matches = await matchesService.getSpecific(0);
    }
    res.status(200).json(matches);
  }

  static async registerNewMatch(req: Request, res: Response) {
    const matchData: Matches = req.body;
    const { data, error } = await matchesService.registerNewMatch(matchData);
    if (error) {
      return res.status(error.status).json({ message: error.message });
    }
    res.status(201).json(data);
  }

  static async finishMatch(req: Request, res: Response) {
    const { id } = req.params;
    await matchesService.finishMatch(Number(id));
    res.status(200).json({ message: 'partida finalizada com êxito' });
  }

  static async updateMatch(req: Request, res: Response) {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;
    const { error } = await matchesService.updateMatch(Number(id), homeTeamGoals, awayTeamGoals);
    if (error) {
      return res.status(error.status).json({ message: error.message });
    }
    res.status(200).json({ message: 'partida atualizada com êxito!' });
  }
}
