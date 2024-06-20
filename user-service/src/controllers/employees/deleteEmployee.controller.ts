import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Employee } from "../../enitities/entityClasses/employee.interface";
import deleteEmployeeUsecase from "../../usecases/employees/deleteEmployee.usecase";


const deleteEmployee = catchAsync(async (req: Request, res: Response) => {
  const employee: string = req.params.id;
  const employeeId: number = parseInt(employee)
  const deletedEmployee: Employee = await deleteEmployeeUsecase.deleteEmployee(employeeId)
  res.status(200).json({
    status: 'success',
    data: deletedEmployee
  })
})



export { deleteEmployee };
