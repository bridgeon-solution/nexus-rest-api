import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Employee } from "../../enitities/entityClasses/employee.interface";
import getEmployeeUsecase from "../../usecases/employees/getEmployee.usecase";


const getAllEmployees = catchAsync(async (req: Request, res: Response) => {
  const getEmployees: Employee[] = await getEmployeeUsecase.getAllEmployees()
  res.status(200).json({
    status: 'success',
    data: getEmployees
  })
})



export { getAllEmployees };
