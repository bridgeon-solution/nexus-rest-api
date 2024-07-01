import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import createLeaveUsecase from "../../usecases/leave/createLeave.usecase.";
import { LeaveType } from "../../entities/entityClasses.ts/leave.interface";

const createLeaveType = catchAsync(async (req: Request, res: Response) => {
    const leaveTypeData: LeaveType = req.body;
    const data = await createLeaveUsecase.createLeaveType(leaveTypeData);
    res.status(200).json({
        status: 'success',
        data
    })
})

export { createLeaveType }