import express, { Router } from "express"
import { createLeave } from "../controllers/leave/createLeave";
import { getAllLeavesById } from "../controllers/leave/getAllLeavesById";
import { getAllLeaves } from "../controllers/leave/getAllLeaves";
import { leaveStatusUpdate } from "../controllers/leave/aprroveLeave";
import { createLeaveType } from "../controllers/leave/createLeaveTypes";
import { getAllLeaveTypes } from "../controllers/leave/getAllLeaveType";

const leaveRoute: Router = express.Router();

leaveRoute.post('/create/:id', createLeave)
leaveRoute.post('/create', createLeaveType)
leaveRoute.get('/get/leaveTypes', getAllLeaveTypes)
leaveRoute.get('/:id', getAllLeavesById)
leaveRoute.get('/', getAllLeaves)
leaveRoute.patch('/approve/:id', leaveStatusUpdate)
leaveRoute.patch('/reject/:id', leaveStatusUpdate)

export default leaveRoute;  