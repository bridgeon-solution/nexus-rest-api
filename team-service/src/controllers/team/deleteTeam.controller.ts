import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import deleteTeamUsecase from "../../usecases/team/deleteTeam.usecase";
import { Teams } from "../../entities/interfaces/team.interface";

const deleteTeam = catchAsync(async (req: Request, res: Response) => {
  const teamId: string = req.params.teamId
  const deletedTeam: Teams = await deleteTeamUsecase.deleteTeam(teamId)
  res.status(200).json({
    status: 'success',
    data: deletedTeam
  })
})

export default deleteTeam