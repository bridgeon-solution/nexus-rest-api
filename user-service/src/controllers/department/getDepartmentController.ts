import { Request, Response } from "express";
import { Department } from "../../entities/entityinterfaces.ts/department.interface";
import catchAsync from "../../middlewares/asyncErrorHandler";
import allDepartmentsUsecase from "../../useCases/departmentUsecases/allDepartments.usecase";

const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const department: string = "getAllDepartments";
  const deletedDepartment: Department = await allDepartmentsUsecase.AllDepartments(department);
  res.status(200).json({
    status: "success",
    data: deletedDepartment.data
  })
})



export { getAllDepartments };

