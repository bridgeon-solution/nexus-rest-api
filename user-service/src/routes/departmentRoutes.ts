import { Router } from "express";
import express from 'express'
import { createDepartment } from "../controllers/department/createDepartmentController";

const departmentRouter: Router = express.Router()

departmentRouter.post('/create', createDepartment)

export default departmentRouter