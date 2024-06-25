import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getLeavesUseCase from "../../usecases/leave/getLeavesUseCase";

const getAllLeaves = catchAsync(async (req: Request, res: Response) => {
    const data = await getLeavesUseCase.getAllLeaves();
    console.log(data);
})

export { getAllLeaves }