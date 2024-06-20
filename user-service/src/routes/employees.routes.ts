import express, { Router } from 'express'
import { createEmployee } from '../controllers/employees/createEmployee.controller';
import { getAllEmployees } from '../controllers/employees/getAllEmployees.controller';
import { getEmployeeById } from '../controllers/employees/getEmployeeId.controller';
import { deleteEmployee } from '../controllers/employees/deleteEmployee.controller';
import { updateEmployee } from '../controllers/employees/updateEmployee.controller';
import { profileImgUpload } from '../middlewares/multer';

const employeesRouter: Router = express.Router();

employeesRouter.post('/create', profileImgUpload, createEmployee);
employeesRouter.get('/', getAllEmployees);
employeesRouter.get('/:id', getEmployeeById);
employeesRouter.delete('/:id', deleteEmployee);
employeesRouter.patch('/:id', profileImgUpload, updateEmployee)

export default employeesRouter