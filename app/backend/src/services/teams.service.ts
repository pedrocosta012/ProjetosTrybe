import Team from '../database/models/Teams';

export default class teamsService {
  static async getAll() {
    const teams = await Team.findAll();
    return teams;
  }

  static async getTeam(id: number) {
    const team = await Team.findOne({ where: { id } });
    return team;
  }
}
