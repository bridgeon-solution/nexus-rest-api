import express, { Express } from 'express'
import { connect } from './controllers/department/createDepartmentController'
import { connectDeleteDepartment } from './controllers/department/deleteDepartmentController'
import { connectAllDepartment } from './controllers/department/getDepartmentController'
import { connectDepartmentId } from './controllers/department/getDepartmentByIdController'
import { connectDeleteEmployee } from './controllers/employees/deleteEmployeeController'
import { connectGetEmployee } from './controllers/employees/getEmployeeController'
import { connectGetEmployeeId } from './controllers/employees/getEmployeeByIdController'
import { updateEmployeeId } from './controllers/employees/updateEmployeeController'
import { updateDepartmentId } from './controllers/department/updateDepartmentController.ts'
import employeeRouter from './routes/employeeRoutes'
import { connectCreateEmployee } from './controllers/employees/createEmployeeController'


const app: Express = express()
app.use(express.json())

app.use('/api/v1/employees', employeeRouter)

//createEmployee()
connect()
connectDeleteDepartment()
connectAllDepartment()
connectDepartmentId()
updateDepartmentId()

//employees
connectCreateEmployee()
connectDeleteEmployee()
connectGetEmployee()
connectGetEmployeeId()
updateEmployeeId()


export default app


