import { Request, Response } from "express";
import catchAsync from "../../middlewares/asyncErrorHandler";
import LoginData from "../../entities/entityinterfaces.ts/loginData";
import founderAuthUsecase from "../../useCases/founderUsecases/founderAuth.usecase";
import { Founder } from "../../entities/entityinterfaces.ts/founder.interface";

const loginFounder = catchAsync(async (req: Request, res: Response) => {
  const founderData: LoginData = req.body
  const authorize: { findFounder: Founder, token: string } = await founderAuthUsecase.authorizeFounder(founderData)
  res.status(200).json({
    status: "success",
    data: authorize
  })
})

export {
  loginFounder
}