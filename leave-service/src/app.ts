import express,{ Express } from "express";
import cors from 'cors'
import leaveRoute from "./routes/leave.routes";

const app:Express = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/leaves', leaveRoute)


export default app;