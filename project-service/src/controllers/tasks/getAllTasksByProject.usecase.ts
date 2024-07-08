import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getAllTasksByProjectUsecase from "../../usecases/tasks/getAllTasksByProject.usecase";
import { Tasks } from "../../entities/project/tasks.interface";

const getAllTasksByProject = catchAsync(async (req: Request, res: Response) => {
  const projectId: string = req.params.projectId;
  const tasksByProject: Tasks[] = await getAllTasksByProjectUsecase.getTasksByProject(projectId)
  res.status(200).json({
    status: 'success',
    data: tasksByProject
  })
})

export default getAllTasksByProject