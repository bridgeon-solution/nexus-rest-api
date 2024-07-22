import catchAsync from "../../utils/asyncErrorHandler";
import { Employee, LoginData } from "../../enitities/entityClasses/employee.interface";
import { Founder } from "../../enitities/entityClasses/founder.interface";
import authUsecase from "../../usecases/auth/auth.usecase";
import { Request, Response } from "express";

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

const logoutController = catchAsync(async (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({
        status:'success',
        data:"Error logging out"
      });
    }
    
    res.redirect('http://localhost:4200/login');
  });

})

export { loginController, logoutController }