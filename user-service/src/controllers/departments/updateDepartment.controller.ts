import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Department, UpdateDepartments } from "../../enitities/entityClasses/department.interface";
import updateDepartmentUsecase from "../../usecases/departments/updateDepartment.usecase";


const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const departmentId: string = req.params.id
  const department = req.body;
  const departmentData: UpdateDepartments = {
    departmentId: departmentId,
    departmentData: department
  }
  const updatedDepartment: Department = await updateDepartmentUsecase.updateDepartment(departmentData);
  res.status(200).json({
    status: 'success',
    data: updatedDepartment
  })
})



export { updateDepartment };
