import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import messageBroker from "../../utils/messageBroker";
import getLeavesUseCase from "../../usecases/leave/getLeavesUseCase";

const getAllLeaves = catchAsync(async (req: Request, res: Response) => {
    const data = await getLeavesUseCase.getAllLeaves();
    console.log(data);
    
    if (data) {
        res.status(200).json({
            status: 'success',
            data
        })
    } else [
        res.status(200).json({
            status: 'No Leaves',
        })
    ]
})

export { getAllLeaves }