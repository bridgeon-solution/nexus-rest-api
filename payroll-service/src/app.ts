import express,{ Express } from "express";
import cors from 'cors'
import payRollRoute from "./routes/payRoll.routes";

const app:Express = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/payroll', payRollRoute)


export default app;