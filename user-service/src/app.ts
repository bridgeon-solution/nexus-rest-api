import express, { Express } from 'express';
import { FounderRouter } from './routes/founderRouter';
import employeeRouter from './routes/employeeRoutes';
import cors from 'cors'
import { MessageBroker } from './utils/messageBroker';
import departmentRouter from './routes/departmentRoutes';
import { connect } from './controllers/department/createDepartmentController';

connect()


const app: Express = express();
app.use(cors())
app.use(express.json());



app.use('/api/v1/founders', FounderRouter);
app.use('/api/v1/employees', employeeRouter);
app.use('/api/v1/departments', departmentRouter)
//global error handler
export default app