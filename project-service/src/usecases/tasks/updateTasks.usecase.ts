import { ObjectId } from "mongoose";
import TasksModel from "../../databases/schema/tasks.schema";
import { Tasks } from "../../entities/project/tasks.interface";
import CustomError from "../../utils/customErrorHandler";

class UpdateTask {
  async updateTask(taskId: string, status: string) {
    try {
      console.log(status)
      if (typeof status !== 'string' || !['Todo', 'In Progress', 'on Hold', 'Done'].includes(status)) {
        throw new CustomError('Invalid status value', 400);
      }
      const updateTask: Tasks = await TasksModel.findByIdAndUpdate(taskId, { $set: { status: status } }, { new: true })
      return updateTask
    } catch (error) {
      console.log(error)
      throw new CustomError(error.message, 500)
    }
  }
}

export default new UpdateTask()