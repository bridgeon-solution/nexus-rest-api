import express, { Router } from 'express'
import { createEmployee } from '../controllers/employees/createEmployeeController'
import { deleteEmployee } from '../controllers/employees/deleteEmployeeController'
import { getAllEmployees } from '../controllers/employees/getEmployeeController'
import { getEmployeeById } from '../controllers/employees/getEmployeeByIdController'


const employeeRouter: Router = express.Router()

employeeRouter.post('/create', createEmployee);
employeeRouter.delete('/:id', deleteEmployee);
employeeRouter.get('/', getAllEmployees);
employeeRouter.get('/:id', getEmployeeById)
export default employeeRouter