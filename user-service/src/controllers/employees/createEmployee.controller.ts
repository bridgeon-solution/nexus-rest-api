import { Request, Response } from "express";
import { Employee } from "../../enitities/entityClasses/employee.interface";
import catchAsync from "../../utils/asyncErrorHandler";
import createEmployeesUsecase from "../../usecases/employees/createEmployees.usecase";


const createEmployee = catchAsync(async (req: Request, res: Response) => {
  const employee: Employee = req.body;
  const salary: number = Number(employee.salary);
  const deprtId: number = Number(employee.departmentId);
  employee.salary = salary;
  employee.departmentId = deprtId;
  employee.birthdate = new Date(employee.birthdate);

  const createdDepartment: Employee = await createEmployeesUsecase.createEmployee(employee);
  res.status(200).json({
    status: 'success',
    data: createdDepartment
  })
})



export { createEmployee };
