import { Request, Response } from "express";
import catchAsync from "../../middlewares/asyncErrorHandler";
import createEmployeeUsecase from "../../useCases/employeeUseCases/createEmployee.usecase";
import { Employee, EmployeeResponse } from "../../entities/entityinterfaces.ts/employee.inteface";


const createEmployee = catchAsync(async (req: Request, res: Response) => {
  const employee: Employee = req.body;
  const createdDepartment: EmployeeResponse = await createEmployeeUsecase.createEmployee(employee);
  res.status(200).json({
    status: 'success',
    data: createdDepartment.data
  })
})



export { createEmployee };
