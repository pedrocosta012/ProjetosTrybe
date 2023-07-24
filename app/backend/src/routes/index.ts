import { Router } from 'express';
import loginRoutes from './login.routes';
import teamsRoutes from './teams.routes';
import matchesRoutes from './matches.routes';
import leaderboardRoutes from './leaderboard.routes';

const allRoutes = Router();

allRoutes.use('/login', loginRoutes);

allRoutes.use('/teams', teamsRoutes);

allRoutes.use('/matches', matchesRoutes);

allRoutes.use('/leaderboard', leaderboardRoutes);

export default allRoutes;
