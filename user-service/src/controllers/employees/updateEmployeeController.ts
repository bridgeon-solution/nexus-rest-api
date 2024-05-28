import { Request, Response } from "express";
import catchAsync from "../../middlewares/asyncErrorHandler";
import { EmployeeResponse, UpdateEmployees } from "../../entities/entityinterfaces.ts/employee.inteface";
import updateEmployeeUsecase from "../../useCases/employeeUseCases/updateEmployee.usecase";

const updateEmployee = catchAsync(async (req: Request, res: Response) => {
  const employeeId: string = req.params.id
  const employee = req.body;
  const employeeData: UpdateEmployees = {
    employeeId: employeeId,
    employeeData: employee
  }
  const updatedEmployee: EmployeeResponse = await updateEmployeeUsecase.updateEmployeeById(employeeData);
  res.status(200).json({
    status: 'success',
    data: updatedEmployee.data
  })
})



export { updateEmployee };
