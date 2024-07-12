import { PrismaClient } from '@prisma/client';
import passport from 'passport';
import { Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth20';
// import { User } from './models/user'; // Adjust this import to your user model location
const Prisma = new PrismaClient
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/api/v1/users/google/callback",
},
    async (accessToken: string, refreshToken: string, profile: any, done) => {
        try {
            const founder = await Prisma.founders.findUnique({ where: { googleId: profile.id } })
            if (!founder) {
                console.log(profile);
                done(null, profile)
            }
        } catch (error) {

        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})
