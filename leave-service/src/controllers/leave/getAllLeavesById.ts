import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getLeavesUseCase from "../../usecases/leave/getLeavesUseCase";
const getAllLeavesById = catchAsync(async (req: Request, res: Response) => {
    const employeId: string = req.params.id;
    const data = await getLeavesUseCase.getAllLeavesById(employeId);
    
    res.status(200).json({
        status: 'success',
        data
    })
})

export { getAllLeavesById }