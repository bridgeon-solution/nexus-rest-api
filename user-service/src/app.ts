import express,{Express} from 'express';
import { router } from './routes/founderRouter';

const app:Express = express();

app.use(express.json());

app.use('/api/v1/founders', router);

export default app