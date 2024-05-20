import express, { Router } from 'express'
import createEmployee from '../controllers/employees/createEmployeeController'
import { founderProfileimgUpload } from '../middlewares/founderImage'


const employeeRouter: Router = express.Router()

employeeRouter.post('/create', founderProfileimgUpload, createEmployee)

export default employeeRouter