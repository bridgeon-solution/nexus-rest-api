import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Employee, LoginData } from "../../entities/entityInterfaces/Employee.interface";
import authUsecase from "../../usecases/employeeUseCases/auth.usecase";

const employeeLogin = catchAsync(async (req: Request, res: Response) => {
  const loginData: LoginData = req.body
  const authorize: { checkEmployee: Employee, token: string } | undefined = await authUsecase.authorizeEmployee(loginData)
  res.status(200).json({
    status: 'success',
    data: authorize?.checkEmployee,
    token: authorize?.token
  })
})

export default employeeLogin