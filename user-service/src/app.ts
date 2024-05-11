import express, { Express } from 'express';
import cors from 'cors'
import { FounderRouter } from './routes/founderRouter';
import adminRouter from './routes/adminRouter';
import errorHandler from '../../common/middlewares/globalErrorHandler'


const app: Express = express();

app.use(cors())
app.use(express.json());

app.use('/api/v1/founders', FounderRouter);
app.use('/api/v1/admin', adminRouter)

app.use(errorHandler) //global error handler
export default app