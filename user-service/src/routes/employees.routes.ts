import express, { Router } from 'express'
import { createEmployee } from '../controllers/employees/createEmployee.controller';
import { getAllEmployeesPaginate } from '../controllers/employees/getAllEmployeesPaginated.controller';
import { getEmployeeById } from '../controllers/employees/getEmployeeId.controller';
import { deleteEmployee } from '../controllers/employees/deleteEmployee.controller';
import { updateEmployee } from '../controllers/employees/updateEmployee.controller';
import { profileImgUpload } from '../middlewares/multer';
import { getAllEmployees } from '../controllers/employees/getAllEmployees.controller';
import { generatePaySlip } from '../controllers/employees/generatePaySlip.controller';

const employeesRouter: Router = express.Router();

employeesRouter.post('/create', profileImgUpload, createEmployee);
employeesRouter.get('/', getAllEmployeesPaginate);
employeesRouter.get('/all', getAllEmployees);
employeesRouter.get('/:id', getEmployeeById);
employeesRouter.delete('/:id', deleteEmployee);
employeesRouter.get('/generate-paySlip/:id', generatePaySlip);
employeesRouter.patch('/:id', profileImgUpload, updateEmployee)

export default employeesRouter