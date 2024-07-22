import { Request, Response } from "express-serve-static-core";
import catchAsync from "../../utils/asyncErrorHandler";
import getProjectTeamUsecase from "../../usecases/projects/getProjectTeam.usecase";

const getTeamDetails = catchAsync(async (req: Request, res: Response) => {
    const projectId: string = req.params.projectId;
    const data = await getProjectTeamUsecase.getTeam(projectId);
    res.status(200).json({
        status: "success",
        data: data
    })
})

export { getTeamDetails }