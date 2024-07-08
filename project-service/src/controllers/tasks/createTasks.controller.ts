import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import createTasksUsecase from "../../usecases/tasks/createTasks.usecase";
import { Tasks } from "../../entities/project/tasks.interface";

const createTaskController = catchAsync(async (req: Request, res: Response) => {
  const tasks: Tasks = req.body;
  const createdTask = await createTasksUsecase.createTasks(tasks)
  res.status(200).json({
    status: 'success',
    data: createdTask
  })
})

export default createTaskController