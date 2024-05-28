import { Request, Response } from "express";
import catchAsync from "../../middlewares/asyncErrorHandler";
import updateDepartmentUsecase from "../../useCases/departmentUsecases/updateDepartment.usecase";
import { Department, UpdateDepartments } from "../../entities/entityinterfaces.ts/department.interface";


const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const departmentId: string = req.params.id
  const department = req.body;
  const departmentData: UpdateDepartments = {
    departmentId: departmentId,
    departmentData: department
  }
  const updatedDepartment: Department = await updateDepartmentUsecase.updateDepartmentById(departmentData);
  res.status(200).json({
    status: 'success',
    data: updatedDepartment.data
  })
})



export { updateDepartment };
