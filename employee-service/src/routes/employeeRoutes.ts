import express, { Router } from 'express'
import employeeLogin from '../controllers/employeeAuth/loginController'

const employeeRouter: Router = express.Router()

employeeRouter.post('/login', employeeLogin)

export default employeeRouter