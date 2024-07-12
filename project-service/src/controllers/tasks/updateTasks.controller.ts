import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import updateTasksUsecase from "../../usecases/tasks/updateTasks.usecase";
import { Tasks } from "../../entities/project/tasks.interface";
import { ObjectId } from "mongoose";

const updateTaskStatus = catchAsync(async (req: Request, res: Response) => {
  const taskId: string = req.params.taskId
  const status: string = req.body.status
  const updatedTask: Tasks = await updateTasksUsecase.updateTask(taskId, status)
  res.status(200).json({
    status: 'success',
    data: updatedTask
  })
})

export default updateTaskStatus