import express, { Router } from 'express'
import createTaskController from '../controllers/tasks/createTasks.controller';
import getAllTasksByProject from '../controllers/tasks/getAllTasksByProject.usecase';
import getTasksByAssignee from '../controllers/tasks/getTasksByAssignee.controller';
import updateTaskStatus from '../controllers/tasks/updateTasks.controller';

const taskRoutes: Router = express.Router();

taskRoutes.post('/create', createTaskController);
taskRoutes.get('/project/:projectId', getAllTasksByProject);
taskRoutes.get('/:assigneeId/:projectId', getTasksByAssignee)
//taskRoutes.delete('project/:taskId')
//taskRoutes.delete('/:tasksId')
taskRoutes.patch('/projects/:taskId', updateTaskStatus)
export default taskRoutes