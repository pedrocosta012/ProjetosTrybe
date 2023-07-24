import { Router } from 'express';
import { loginDataValidate, validateToken } from '../middlewares';
import LoginController from '../controllers/login.controller';

const router = Router();

router.post('/', loginDataValidate, LoginController.login);

router.get('/validate', validateToken, LoginController.validate);

export default router;
