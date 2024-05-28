import { Request, Response } from "express";
import catchAsync from "../../middlewares/asyncErrorHandler";
import { EmployeeResponse } from "../../entities/entityinterfaces.ts/employee.inteface";
import getAllEmployeesUsecase from "../../useCases/employeeUseCases/getAllEmployees.usecase";


const getAllEmployees = catchAsync(async (req: Request, res: Response) => {
  const employee: string = "get all employees";
  const getEmployees: EmployeeResponse = await getAllEmployeesUsecase.AllEmployees(employee)
  res.status(200).json({
    status: 'success',
    data: getEmployees.data
  })
})



export { getAllEmployees };
