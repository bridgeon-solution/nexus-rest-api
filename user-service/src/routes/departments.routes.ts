import express, { Router } from 'express'
import { createDepartment } from '../controllers/departments/createDepartment.controller';
import { getAllDepartments } from '../controllers/departments/getAllDepartment.controller';
import { getDepartmentById } from '../controllers/departments/getDepartmentId.usecase';
import { deleteDepartment } from '../controllers/departments/deleteDepartment.usecase';
import { updateDepartment } from '../controllers/departments/updateDepartment.controller';

const departmentRouter: Router = express.Router();

departmentRouter.post('/create', createDepartment);
departmentRouter.get('/', getAllDepartments);
departmentRouter.get('/:id', getDepartmentById);
departmentRouter.delete('/:id', deleteDepartment);
departmentRouter.post('/:id', updateDepartment);

export default departmentRouter