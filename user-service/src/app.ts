import express,{Express} from 'express';

const app:Express = express();

app.use(express.json());

// app.use('/api/v1/founders');

export default app