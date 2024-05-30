import { Request, Response } from "express";
import catchAsync from "../../middlewares/asyncErrorHandler";

const loginFounder = catchAsync(async (req: Request, res: Response) => {
  const founderData = req.body
})