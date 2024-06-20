import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Department } from "../../enitities/entityClasses/department.interface";
import getDepartmentUsecase from "../../usecases/departments/getDepartment.usecase";


const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const deletedDepartment: Department[] = await getDepartmentUsecase.getAllDepartments();
  res.status(200).json({
    status: "success",
    data: deletedDepartment
  })
})



export { getAllDepartments };

