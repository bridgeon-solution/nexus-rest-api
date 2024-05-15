import express, { Express } from 'express';
import { FounderRouter } from './routes/founderRouter';
import cors from 'cors'
const app: Express = express();
app.use(cors())
app.use(express.json());

app.use('/api/v1/founders', FounderRouter);

//global error handler
export default app