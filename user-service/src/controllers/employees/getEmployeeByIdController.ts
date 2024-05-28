import { Request, Response } from "express";
import catchAsync from "../../middlewares/asyncErrorHandler";
import { EmployeeResponse } from "../../entities/entityinterfaces.ts/employee.inteface";
import employeeByIdUsecase from "../../useCases/employeeUseCases/employeeById.usecase";

const getEmployeeById = catchAsync(async (req: Request, res: Response) => {
  const employeeId: string = req.params.id;
  const getEmployeeById: EmployeeResponse = await employeeByIdUsecase.getEmployeeById(employeeId)
  res.status(200).json({
    status: 'success',
    data: getEmployeeById.data
  })
})



export { getEmployeeById };
