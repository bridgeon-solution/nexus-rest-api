import express, { Router } from "express"
import { createPayRoll } from "../controller/payroll/createPayRoll";

const payRollRoute: Router = express.Router();

payRollRoute.post('/create', createPayRoll)

export default payRollRoute;  