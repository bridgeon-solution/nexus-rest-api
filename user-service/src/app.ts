import express, { Express } from 'express';
import { FounderRouter } from './routes/founderRouter';
import errorHandler from '../../common/middlewares/globalErrorHandler'
import cors from 'cors'
const app: Express = express();

app.use(express.json());
app.use(cors())

app.use('/api/v1/founders', FounderRouter);

app.use(errorHandler) //global error handler
export default app