import express from 'express'
import { adminLogin } from '../controllers/admin/adminController'
const adminRouter = express.Router()

adminRouter.post('/login', adminLogin)

export default adminRouter