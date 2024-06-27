import express, { Router } from "express"
import { createLeave } from "../controllers/leave/createLeave";
import { getAllLeavesById } from "../controllers/leave/getAllLeavesById";
import { getAllLeaves } from "../controllers/leave/getAllLeaves";
import { leaveStatusUpdate } from "../controllers/leave/aprroveLeave";

const leaveRoute: Router = express.Router();

leaveRoute.post('/create/:id', createLeave)
leaveRoute.get('/:id', getAllLeavesById)
leaveRoute.get('/', getAllLeaves)
leaveRoute.patch('/approve/:id', leaveStatusUpdate)
leaveRoute.patch('/reject/:id', leaveStatusUpdate)

export default leaveRoute;  