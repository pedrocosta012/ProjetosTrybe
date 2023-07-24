import { Router } from 'express';
import leaderboardController from '../controllers/leaderboard.controller';

const router = Router();

router.get('/home', leaderboardController.teamsData);

router.get('/away', leaderboardController.teamsData);

export default router;
