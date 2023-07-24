import Team from '../database/models/Teams';
import Matches from '../database/models/Matches';

function teamMatchesVerification(matches: Matches[], path: string) {
  const result: {
    totalVictories: number, totalDraws: number, totalLosses:number,
  } = {
    totalVictories: 0, totalDraws: 0, totalLosses: 0,
  };
  matches.forEach((m) => {
    const goalsDifference = path.includes('home')
      ? m.homeTeamGoals - m.awayTeamGoals
      : m.awayTeamGoals - m.homeTeamGoals;
    if (goalsDifference > 0) {
      result.totalVictories += 1;
    } else if (goalsDifference < 0) {
      result.totalLosses += 1;
    } else {
      result.totalDraws += 1;
    }
  });
  return result;
}

function totalTeamMatches(id: number, matches: Matches[], path: string) {
  const result: {
    totalGames: number, goalsFavor: number, goalsOwn: number,
  } = {
    totalGames: 0, goalsFavor: 0, goalsOwn: 0,
  };
  const matchesOfThisTeam: Matches[] = [];
  matches.forEach((m) => {
    const teamHomeOrAway = path.includes('home') ? m.homeTeam : m.awayTeam;
    if (teamHomeOrAway === id) {
      result.totalGames += 1;
      matchesOfThisTeam.push(m.dataValues);
      result.goalsFavor += path.includes('home') ? m.homeTeamGoals : m.awayTeamGoals;
      result.goalsOwn += path.includes('home') ? m.awayTeamGoals : m.homeTeamGoals;
    }
  });
  return { ...result, ...teamMatchesVerification(matchesOfThisTeam, path) };
}

export default class leaderboardService {
  static async teamsData(path: string) {
    const matches: Matches[] = await Matches.findAll();
    const teams: Team[] = await Team.findAll();
    const finishedMatches = matches.filter((m) => !m.inProgress);
    const filtered = teams.map((curr: Team) => {
      const name = curr.teamName;
      const teamMatchesData = totalTeamMatches(curr.id, finishedMatches, path);
      const totalPoints = teamMatchesData.totalVictories * 3 + teamMatchesData.totalDraws;
      const goalsBalance = teamMatchesData.goalsFavor - teamMatchesData.goalsOwn;
      const efficiency = ((totalPoints / (teamMatchesData.totalGames * 3)) * 100).toFixed(2);
      return { name, totalPoints, goalsBalance, efficiency, ...teamMatchesData };
    });
    return path.includes('home')
      ? filtered.sort((a, b) => b.totalPoints - a.totalPoints || a.totalLosses - b.totalLosses
    || b.goalsFavor - a.goalsFavor || b.goalsBalance - a.goalsBalance)
      : filtered.sort((a, b) => b.totalPoints - a.totalPoints || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor);
  }
}
