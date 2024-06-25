import express, { Express } from 'express'
import founderRouter from './routes/founders.routes'
import employeesRouter from './routes/employees.routes';
import departmentRouter from './routes/departments.routes';
import authRouter from './routes/auth.routes';
import cors from 'cors'
import { listenForEmployeeInfo } from './controllers/employees/getEmployeeId.controller';


const app: Express = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1/founders', founderRouter);
app.use('/api/v1/employees', employeesRouter);
app.use('/api/v1/departments', departmentRouter);
app.use('/api/v1/users', authRouter)




export default app