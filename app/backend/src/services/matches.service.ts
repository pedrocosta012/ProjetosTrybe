import Team from '../database/models/Teams';
import Matches from '../database/models/Matches';

interface DataError { status: number, message: string }

type DataReturn = {
  data?: Matches,
  error?: DataError,
};

export default class matchesService {
  static async thisTeamExists(id: number | string) {
    if (typeof id === 'string') {
      Number(id);
    }
    const team = await Team.findByPk(id);
    if (team) {
      return true;
    }
    return false;
  }

  static async getAll() {
    const matches = await Matches.findAll({ include: [{
      model: Team,
      as: 'teamHome',
      attributes: ['teamName'],
    },
    {
      model: Team,
      as: 'teamAway',
      attributes: ['teamName'],
    }] });
    const matchesFormatted = matches.map((curr) => curr.dataValues);
    return matchesFormatted;
  }

  static async getSpecific(inProgress: number) {
    const matches = await Matches.findAll({
      where: { inProgress },
      include: [{
        model: Team,
        as: 'teamHome',
        attributes: ['teamName'],
      },
      {
        model: Team,
        as: 'teamAway',
        attributes: ['teamName'],
      }],
    });
    return matches;
  }

  static async registerNewMatch(newMatch: Matches): Promise<DataReturn> {
    const { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals } = newMatch;
    const homeTeamCheck = await matchesService.thisTeamExists(homeTeam);
    const awayTeamCheck = await matchesService.thisTeamExists(awayTeam);
    if (!homeTeamCheck || !awayTeamCheck) {
      return { error: { status: 404, message: 'There is no team with such id!' } };
    }
    if (Number(homeTeam) === Number(awayTeam)) {
      const message = 'It is not possible to create a match with two equal teams';
      return { error: { status: 422, message } };
    }
    const result = await Matches.create({
      homeTeam: Number(homeTeam),
      homeTeamGoals: Number(homeTeamGoals),
      awayTeam: Number(awayTeam),
      awayTeamGoals: Number(awayTeamGoals),
      inProgress: 1,
    });
    return { data: result };
  }

  static async finishMatch(id: number) {
    await Matches.update({ inProgress: 0 }, { where: { id } });
  }

  static async updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    const match = await Matches.findByPk(id);
    if (match) {
      await Matches.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
      return { error: undefined };
    }
    return { error: { status: 422, message: 'A atualização falhou' } };
  }
}
