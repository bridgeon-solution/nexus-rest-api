import exp from 'express';
import { founderController } from '../controllers/founderControllers';

export const router = exp.Router();


router.post('/signup',founderController.founderSignup)

