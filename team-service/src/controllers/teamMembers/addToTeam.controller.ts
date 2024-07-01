import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import addToTeamUsecase from "../../usecases/teamMembers/addToTeam.usecase";

const addToTeam = catchAsync(async (req: Request, res: Response) => {
  const employeeId: number = req.body.employeeId
  const teamId: string = req.params.teamId
  const addedTeamMember = await addToTeamUsecase.addToTeam(employeeId, teamId)
  res.status(200).json({
    status: 'success',
    data: addedTeamMember
  })
})

export default addToTeam