import { Request, Response } from "express";
import Department from "../../entities/entityinterfaces.ts/department.interface";
import deleteEmployeeUsecase from "../../useCases/departmentUsecases/deleteDepartment.usecase";
import catchAsync from "../../middlewares/asyncErrorHandler";


const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const department = req.params.id;
  const deletedDepartment: Department = await deleteEmployeeUsecase.DeleteDepartment(department);
  res.status(200).json({
    status: "success",
    data: deletedDepartment.data
  })
})



export { deleteDepartment };

