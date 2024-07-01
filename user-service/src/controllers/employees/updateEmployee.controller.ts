import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Employee, UpdateEmployees } from "../../enitities/entityClasses/employee.interface";
import updateEmployeeUsecase from "../../usecases/employees/updateEmployee.usecase";

const updateEmployee = catchAsync(async (req: Request, res: Response) => {
  const employeeId: string = req.params.id
  const employee: Employee = req.body;
  const employeeData: UpdateEmployees = {
    employeeId: employeeId,
    employeeData: employee
  }
  employeeData.employeeData.birthdate = new Date(employee.birthdate);
  employeeData.employeeData.departmentId = Number(employee.departmentId);
  employeeData.employeeData.salary = Number(employee.salary);
  const updatedEmployee = await updateEmployeeUsecase.updateEmployee(employeeData);
  // console.log(updatedEmployee);

  res.status(200).json({
    status: 'success',
    data: updatedEmployee
  })
})



export { updateEmployee };
