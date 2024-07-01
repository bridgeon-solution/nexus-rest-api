import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Department } from "../../enitities/entityClasses/department.interface";
import getDepartmentUsecase from "../../usecases/departments/getDepartment.usecase";

const getDepartmentById = catchAsync(async (req: Request, res: Response) => {
  const departmentId: number = Number(req.params.id);

  const deletedDepartment: Department | null = await getDepartmentUsecase.getDepartmentById(departmentId);
  res.status(200).json({
    status: "success",
    data: deletedDepartment
  })
})



export { getDepartmentById };

