import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getTasksByAssigneeUsecase from "../../usecases/tasks/getTasksByAssignee.usecase";
import { Tasks } from "../../entities/project/tasks.interface";

const getTasksByAssignee = catchAsync(async (req: Request, res: Response) => {
  const assignee: string = req.params.assigneeId
  const projectId: string = req.params.projectId
  const tasksByAssignee: Tasks[] = await getTasksByAssigneeUsecase.getTasksByAssignee(assignee, projectId)
  res.status(200).json({
    status: 'success',
    data: tasksByAssignee
  });
});

export default getTasksByAssignee