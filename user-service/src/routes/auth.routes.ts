import express, { Router } from 'express'
import passport from 'passport';
import { loginController, logoutController } from '../controllers/auth/auth.controller';

const authRouter: Router = express.Router();

authRouter.post('/login', loginController)

// Google Auth
authRouter.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google Auth Callback
authRouter.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('http://localhost:4200/registration/payment'); // Redirect to your frontend
    }
);

authRouter.post('/api/logout', logoutController);


export default authRouter