import { Request, Response } from "express";
import { Department } from "../../entities/entityinterfaces.ts/department.interface";
import createDepartmentUsecase from "../../useCases/departmentUsecases/createDepartment.usecase";
import catchAsync from "../../middlewares/asyncErrorHandler";


const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const department = req.body;
  const createdDepartment: Department = await createDepartmentUsecase.createDepartment(department);
  res.status(200).json({
    status: 'success',
    data: createdDepartment.data
  })
})



export { createDepartment };
