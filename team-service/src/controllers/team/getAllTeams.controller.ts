import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import allTeamUsecase from "../../usecases/team/allTeam.usecase";
import { Teams } from "../../entities/interfaces/team.interface";

const getAllTeams = catchAsync(async (req: Request, res: Response) => {
  const allTeams: Teams[] = await allTeamUsecase.getAllTeams();
  res.status(200).json({
    status: 'success',
    data: allTeams
  })
})

const getAllTeamsByTeamLead = catchAsync(async (req: Request, res: Response) => {
  const teamLeadId: number = req.user
  const allTeams: Teams[] = await allTeamUsecase.getAllTeamsByTeamLead(teamLeadId)
  res.status(200).json({
    status: 'success',
    data: allTeams
  })
})


export { getAllTeams, getAllTeamsByTeamLead }