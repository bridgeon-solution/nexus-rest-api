import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getProjectByLeadUsecase from "../../usecases/projects/getProjectByLead.usecase";

const getProjectByTeamLead = catchAsync(async (req: Request, res: Response) => {
  const teamLeadId: string = req.params.teamLeadId;
  const projectByLead = await getProjectByLeadUsecase.getProject(teamLeadId)
  res.status(200).json({
    status: "success",
    data: projectByLead
  }
  )
});

export default getProjectByTeamLead