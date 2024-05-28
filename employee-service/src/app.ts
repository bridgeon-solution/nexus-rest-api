import express, { Express } from 'express'
import { connectCreateEmployee } from './controllers/employee/createEmployeeController'
import { createDepartmentByFounder, connect } from './controllers/department/createDepartmentController'
import { connectDeleteDepartment } from './controllers/department/deleteDepartmentController'
import { connectAllDepartment } from './controllers/department/getDepartmentController'
import { connectDepartmentId } from './controllers/department/getDepartmentByIdController'
import { connectDeleteEmployee } from './controllers/employee/deleteEmployeeController'


const app: Express = express()

//createEmployee()
connect()
connectDeleteDepartment()
connectAllDepartment()
connectDepartmentId()

//employees
connectCreateEmployee()
connectDeleteEmployee()


export default app


