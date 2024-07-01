import express, { Router } from "express";
import addToTeam from "../controllers/teamMembers/addToTeam.controller";
import deleteFromTeam from "../controllers/teamMembers/deleteFromTeam.controller";

const teamMembers: Router = express.Router();

teamMembers.post('/:teamId', addToTeam);
teamMembers.delete('/:teamId/:employeeId', deleteFromTeam)
export default teamMembers