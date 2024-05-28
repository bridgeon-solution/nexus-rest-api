import { Request, Response } from "express";
import { Department } from "../../entities/entityinterfaces.ts/department.interface";
import catchAsync from "../../middlewares/asyncErrorHandler";
import departmentByIdUsecase from "../../useCases/departmentUsecases/departmentById.usecase";

const getDepartmentById = catchAsync(async (req: Request, res: Response) => {
  const departmentId: string = req.params.id;
  const deletedDepartment: Department = await departmentByIdUsecase.getDepartmentById(departmentId);
  res.status(200).json({
    status: "success",
    data: deletedDepartment.data
  })
})



export { getDepartmentById };

