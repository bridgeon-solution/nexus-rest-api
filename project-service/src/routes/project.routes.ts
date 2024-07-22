import expres, { Router } from 'express';
import { createProject } from '../controllers/Projects/createProject.controller';
import { projectLogo } from '../middleware/multer';
import { getAllProjects } from '../controllers/Projects/getAllProjects.controller';
import { getProjectById } from '../controllers/Projects/getProjectById.controller';
import { getTeamDetails } from '../controllers/Projects/getProjectTeam.controller';
import getProjectByTeamLead from '../controllers/Projects/getProjectByTeamLead.controller';

const projectRouter: Router = expres.Router();

projectRouter.post('/create/:id', projectLogo, createProject)
projectRouter.get('/', getAllProjects)
projectRouter.get('/:id', getProjectById)
projectRouter.get('/team-details/:projectId', getTeamDetails)
projectRouter.get('/teamLead/:teamLeadId', getProjectByTeamLead)

export default projectRouter