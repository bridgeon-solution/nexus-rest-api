import { Request, Response } from "express";
import { Department } from "../../enitities/entityClasses/department.interface";
import catchAsync from "../../utils/asyncErrorHandler";
import createDepartmentUsecase from "../../usecases/departments/createDepartment.usecase";


const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const department = req.body.name;
  
  const createdDepartment: Department = await createDepartmentUsecase.createDepartment(department);
  res.status(200).json({
    status: 'success',
    data: createdDepartment
  })
})



export { createDepartment };
