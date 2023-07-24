import { Router } from 'express';
import matchesController from '../controllers/matches.controller';
import {
  validateToken,
  requiredFieldsCreateMatch,
  validateFieldsUpdateMatch,
} from '../middlewares';

const router = Router();

router.get('/', matchesController.getAll);

router.post('/', validateToken, requiredFieldsCreateMatch, matchesController.registerNewMatch);

router.patch('/:id/finish', validateToken, matchesController.finishMatch);

router.patch('/:id', validateToken, validateFieldsUpdateMatch, matchesController.updateMatch);

export default router;
