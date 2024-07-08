import express, { Router } from "express";
import addToTeam from "../controllers/teamMembers/addToTeam.controller";
import deleteFromTeam from "../controllers/teamMembers/deleteFromTeam.controller";
import { getTeamMeambers } from "../controllers/teamMembers/getTeamMembers.controller";

const teamMembers: Router = express.Router();

teamMembers.post('/:teamId', addToTeam);
teamMembers.delete('/:teamId/:employeeId', deleteFromTeam)
teamMembers.get('/:teamId/', getTeamMeambers)
export default teamMembers