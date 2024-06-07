import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Employee } from "../../enitities/entityClasses/employee.interface";
import getEmployeeUsecase from "../../usecases/employees/getEmployee.usecase";


const getEmployeeById = catchAsync(async (req: Request, res: Response) => {
  const employee: string = req.params.id;
  const employeeId: number = parseInt(employee)
  const getEmployeeById: Employee = await getEmployeeUsecase.getEmployeeById(employeeId)
  res.status(200).json({
    status: 'success',
    data: getEmployeeById
  })
})



export { getEmployeeById };
