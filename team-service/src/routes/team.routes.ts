import express, { Router } from 'express';
import verifyRole from '../middlewares/protectRoutes';
import createTeam from '../controllers/team/createTeam.controller';
import deleteTeam from '../controllers/team/deleteTeam.controller';
import updateTeam from '../controllers/team/updateTeam.controller';
import { getAllTeams, getAllTeamsByTeamLead } from '../controllers/team/getAllTeams.controller';
import findTeamById from '../controllers/team/getTeamById.controller';

const teamRouter: Router = express.Router()

teamRouter.post('/create', verifyRole(['Employee', 'founder', 'Team Leader']), createTeam)
teamRouter.delete('/:teamId', verifyRole(['Employee', 'founder', 'Team Leader']), deleteTeam)
teamRouter.patch('/:teamId', verifyRole(['Employee', 'founder', 'Team Leader']), updateTeam)
teamRouter.get('/:teamId', verifyRole(['Employee', 'founder', 'Team Leader']), findTeamById)
teamRouter.get('/teamlead/teams', verifyRole(['Employee', 'founder', 'Team Leader']), getAllTeamsByTeamLead)
teamRouter.get('/', verifyRole(['Employee', 'founder', 'Team Leader']), getAllTeams)
export default teamRouter