import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { LeaveRequest } from "../../entities/entityClasses.ts/leave.interface";
import createLeaveUsecase from "../../usecases/leave/createLeave.usecase.";


const createLeave = catchAsync(async (req: Request, res: Response) => {
    const leaveReaquestValues: LeaveRequest = req.body;
    leaveReaquestValues.startDate = new Date(req.body.startDate)
    leaveReaquestValues.endDate = new Date(req.body.endDate)
    leaveReaquestValues.employeeId = Number(req.params.id);
    
    const createLeave = await createLeaveUsecase.createLeave(leaveReaquestValues);
    res.status(200).json({
        status: 'success',
        data: createLeave
    })
})

export { createLeave }