import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Employee, LoginData } from "../../enitities/entityClasses/employee.interface";
import { Founder } from "../../enitities/entityClasses/founder.interface";
import authUsecase from "../../usecases/auth/auth.usecase";

const loginController = catchAsync(async (req: Request, res: Response) => {
  const loginBody: LoginData = req.body;
  const loggedDatas: { employee?: Employee, founder?: Founder, token: string } = await authUsecase.authorizeUser(loginBody);

  let loggedInUser: Founder | Employee | undefined // assuming a variable to check whose loggedin


  if (loggedDatas.employee) { // checking the logged data is employee or founder
    loggedInUser = loggedDatas.employee
  } else if (loggedDatas.founder) {
    loggedInUser = loggedDatas.founder
  }

  res.status(200).json({
    status: 'success',
    data: loggedInUser,
    token: loggedDatas.token
  })
})

export default loginController