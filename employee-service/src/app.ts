import express, { Express } from 'express'
import createEmployee from './controllers/employee/createEmployeeController'
import { createDepartmentByFounder, connect } from './controllers/department/createDepartmentController'


const app: Express = express()

//createEmployee()
connect()


export default app


