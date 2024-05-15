import express, { Express } from 'express';
import { FounderRouter } from './routes/founderRouter';

const app: Express = express();

app.use(express.json());

app.use('/api/v1/founders', FounderRouter);

app.use(errorHandler) //global error handler
export default app