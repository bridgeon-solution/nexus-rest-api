import { Router } from "express";
import express from 'express'
import { createDepartment } from "../controllers/department/createDepartmentController";
import { deleteDepartment } from "../controllers/department/deleteDepartmentController";
import { getDepartmentById } from "../controllers/department/getDepartmentByIdController";
import { getAllDepartments } from "../controllers/department/getDepartmentController";
import { updateDepartment } from "../controllers/department/updateDepartmentController";

const departmentRouter: Router = express.Router()

departmentRouter.post('/create', createDepartment)
departmentRouter.delete('/:id', deleteDepartment)
departmentRouter.get('/', getAllDepartments)
departmentRouter.get('/:id', getDepartmentById)
departmentRouter.patch('/:id', updateDepartment)

export default departmentRouter