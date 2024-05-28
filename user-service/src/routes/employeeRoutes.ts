import express, { Router } from 'express'
import { createEmployee } from '../controllers/employees/createEmployeeController'
import { deleteEmployee } from '../controllers/employees/deleteEmployeeController'


const employeeRouter: Router = express.Router()

employeeRouter.post('/create', createEmployee)
employeeRouter.delete('/:id', deleteEmployee)
export default employeeRouter