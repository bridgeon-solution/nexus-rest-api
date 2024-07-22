import express, { Router } from "express"
import { createPayRoll } from "../controller/payroll/createPayRoll";
import { getPayRoll } from "../controller/payroll/getAllPayrRoll.controller";
import { getPaySlipById } from "../controller/payroll/getPaySlip.controller";
import { getPayslipsByDate } from "../controller/payroll/getPaySlipByDate.controller";

const payRollRoute: Router = express.Router();

payRollRoute.post('/create', createPayRoll)
payRollRoute.get('/', getPayRoll)
payRollRoute.get('/:id', getPaySlipById)
payRollRoute.get('/payslips', getPayslipsByDate);


export default payRollRoute;  