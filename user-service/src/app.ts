import express, { Express } from 'express'
import founderRouter from './routes/founders.routes'
import employeesRouter from './routes/employees.routes';
import departmentRouter from './routes/departments.routes';
import authRouter from './routes/auth.routes';
import cors from 'cors';
import session from 'express-session';
import permissionRouter from './routes/permission.routes';
import passport from 'passport';


const app: Express = express()
app.use(cors())
app.use(express.json())
app.use(session({
    secret: 'new',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1/founders', founderRouter);
app.use('/api/v1/employees', employeesRouter);
app.use('/api/v1/departments', departmentRouter);
app.use('/api/v1/users', authRouter)
app.use('/api/v1/permission', permissionRouter)

export default app