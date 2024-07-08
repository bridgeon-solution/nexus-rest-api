import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getTeamMembersUsecase from "../../usecases/teamMembers/getTeamMembers.usecase";

const getTeamMeambers = catchAsync(async (req: Request, res: Response) => {
    const teamId: string = req.params.teamId;
    const data = await getTeamMembersUsecase.getTeamMembers(teamId);
    res.status(200).json({
        status:"success",
        data
    })
})

export { getTeamMeambers }