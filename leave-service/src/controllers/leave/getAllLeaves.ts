import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import messageBroker from "../../utils/messageBroker";
import getLeavesUseCase from "../../usecases/leave/getLeavesUseCase";

const getAllLeaves = catchAsync(async (req: Request, res: Response) => {
    const data = await getLeavesUseCase.getAllLeaves();  
    res.status(200).json({
        status: 'success',
        data
    })
})

export { getAllLeaves }