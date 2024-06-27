import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import approveOrRejectLeaveUseCase from "../../usecases/leave/approveOrRejectLeave.useCase";

const leaveStatusUpdate = catchAsync(async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const url: string = req.url;
    const data = await approveOrRejectLeaveUseCase.updateLeaveStatus(id, url);
    res.status(200).json({
        status: "Succes",
        data
    })
})

export { leaveStatusUpdate }