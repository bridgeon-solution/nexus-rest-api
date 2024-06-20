import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Department } from "../../enitities/entityClasses/department.interface";
import deleteDepartmentUsecase from "../../usecases/departments/deleteDepartment.usecase";



const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const department: string = req.params.id;
  const departmentId: number = parseInt(department)
  const deletedDepartment: Department = await deleteDepartmentUsecase.deleteDepartment(departmentId);
  res.status(200).json({
    status: "success",
    data: deletedDepartment
  })
})



export { deleteDepartment };

