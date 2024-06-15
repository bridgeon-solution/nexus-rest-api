import express, { Router } from "express"
import { createLeave } from "../controllers/leave/createLeave";
import { getAllLeaves } from "../controllers/leave/getAllLeaves";

const leaveRoute: Router = express.Router();

leaveRoute.post('/create/:id', createLeave)
leaveRoute.get('/', getAllLeaves)

export default leaveRoute;  