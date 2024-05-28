import { Request, Response } from "express";
import catchAsync from "../../middlewares/asyncErrorHandler";
import { EmployeeResponse } from "../../entities/entityinterfaces.ts/employee.inteface";
import deleteEmployeeUsecase from "../../useCases/employeeUseCases/deleteEmployee.usecase";


const deleteEmployee = catchAsync(async (req: Request, res: Response) => {
  const employeeId: string = req.params.id;
  const deletedEmployee: EmployeeResponse = await deleteEmployeeUsecase.deleteEmployee(employeeId)
  res.status(200).json({
    status: 'success',
    data: deletedEmployee.data
  })
})



export { deleteEmployee };
