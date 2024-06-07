import express, { Router } from 'express'
import loginController from '../controllers/auth/auth.controller';

const authRouter: Router = express.Router();

authRouter.post('/login', loginController)

export default authRouter