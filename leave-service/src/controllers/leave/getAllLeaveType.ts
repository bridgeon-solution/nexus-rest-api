import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getLeavesUseCase from "../../usecases/leave/getLeavesUseCase";

const getAllLeaveTypes = catchAsync(async (req: Request, res: Response) => {
    const data = await getLeavesUseCase.getAllLeaveType();
    res.status(200).json({
        status: 'success',
        data
    })
})

export { getAllLeaveTypes }