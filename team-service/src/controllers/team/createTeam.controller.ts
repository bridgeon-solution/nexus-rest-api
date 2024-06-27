import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { TeamBody, Teams } from "../../entities/interfaces/team.interface";
import createTeamUsecase from "../../usecases/team/createTeam.usecase";

const createTeam = catchAsync(async (req: Request, res: Response) => {
  const teamBody: TeamBody = req.body
  const teamLead: number = req.user
  const createdTeam: Teams = await createTeamUsecase.createTeam(teamBody, teamLead)
  res.status(200).json({
    status: 'success',
    data: createdTeam
  })
})


export default createTeam