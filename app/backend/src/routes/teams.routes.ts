import { Router } from 'express';
import teamsController from '../controllers/teams.controller';

const router = Router();

router.get('/', teamsController.getAll);

router.get('/:id', teamsController.getTeam);

export default router;
