import expres, { Router } from 'express';
import { createProject } from '../controllers/Projects/createProject.controller';
import { projectLogo } from '../middleware/multer';
import { getAllProjects } from '../controllers/Projects/getAllProjects.controller';
import { getProjectById } from '../controllers/Projects/getProjectById.controller';

const projectRouter: Router = expres.Router();

projectRouter.post('/create/:id', projectLogo, createProject)
projectRouter.get('/', getAllProjects)
projectRouter.get('/:id', getProjectById)

export default projectRouter