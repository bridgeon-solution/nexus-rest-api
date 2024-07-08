import express, { Router } from 'express'
import createTaskController from '../controllers/tasks/createTasks.controller';
import getAllTasksByProject from '../controllers/tasks/getAllTasksByProject.usecase';
import getTasksByAssignee from '../controllers/tasks/getTasksByAssignee.controller';

const taskRoutes: Router = express.Router();

taskRoutes.post('/create', createTaskController);
taskRoutes.get('/project/:projectId', getAllTasksByProject);
taskRoutes.get('/:assigneeId/:projectId', getTasksByAssignee)
//taskRoutes.delete('project/:taskId')
//taskRoutes.delete('/:tasksId')

export default taskRoutes