import express, { Router } from 'express';
import verifyRole from '../middlewares/protectRoutes';
import createTeam from '../controllers/team/createTeam.controller';
import deleteTeam from '../controllers/team/deleteTeam.controller';
import updateTeam from '../controllers/team/updateTeam.controller';
import { getAllTeams, getAllTeamsByTeamLead } from '../controllers/team/getAllTeams.controller';
import findTeamById from '../controllers/team/getTeamById.controller';

const teamRouter: Router = express.Router()

teamRouter.post('/create', verifyRole(['Employee', 'founder']), createTeam)
teamRouter.delete('/:teamId', verifyRole(['Employee', 'founder']), deleteTeam)
teamRouter.patch('/:teamId', verifyRole(['Employee', 'founder']), updateTeam)
teamRouter.get('/:teamId', verifyRole(['Employee', 'founder']), findTeamById)
teamRouter.get('/teamlead/teams', verifyRole(['Employee', 'founder']), getAllTeamsByTeamLead)
teamRouter.get('/', verifyRole(['Employee', 'founder']), getAllTeams)
export default teamRouter