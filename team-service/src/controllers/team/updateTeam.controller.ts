import { Request, Response } from "express";
import { TeamBody, Teams } from "../../entities/interfaces/team.interface";
import updateTeamUsecase from "../../usecases/team/updateTeam.usecase";
import catchAsync from "../../utils/asyncErrorHandler";

const updateTeam = catchAsync(async (req: Request, res: Response) => {
  const teamId: string = req.params.teamId;
  const updateData: TeamBody = req.body;
  const updatedTeam: Teams = await updateTeamUsecase.updateTeam(teamId, updateData)
  res.status(200).json({
    status: 'success',
    data: updatedTeam
  })
})

export default updateTeam