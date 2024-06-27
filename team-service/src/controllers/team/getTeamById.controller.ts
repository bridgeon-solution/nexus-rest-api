import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Teams } from "../../entities/interfaces/team.interface";
import getByIdUsecase from "../../usecases/team/getById.usecase";

const findTeamById = catchAsync(async (req: Request, res: Response) => {
  const teamId: string = req.params.teamId
  const teamById: Teams = await getByIdUsecase.findTeamById(teamId);
  res.status(200).json({
    status: 'success',
    data: teamById
  })
})

export default findTeamById