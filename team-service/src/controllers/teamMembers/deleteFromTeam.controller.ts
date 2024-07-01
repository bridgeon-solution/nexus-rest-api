import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import deleteFromTeamUsecase from "../../usecases/teamMembers/deleteFromTeam.usecase";

const deleteFromTeam = catchAsync(async (req: Request, res: Response) => {
  const employeeId: number = req.body.employeeId
  const teamId: string = req.params.teamId
  const deletedTeam = await deleteFromTeamUsecase.deleteFromTeam(employeeId, teamId)
  res.status(200).json({
    status: 'success',
    data: deletedTeam
  })
})

export default deleteFromTeam