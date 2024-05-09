import express, { Express } from 'express';
import { FounderRouter } from './routes/founderRouter';
import adminRouter from './routes/adminRouter';

const app: Express = express();

app.use(express.json());

app.use('/api/v1/founders', FounderRouter);
app.use('/api/v1/admin', adminRouter)

export default app