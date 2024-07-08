import { Tasks } from "../../entities/project/tasks.interface"
import taskRepository from "../../repositories/task.repository"
import CustomError from "../../utils/customErrorHandler"

class TasksByAssignee {
  async getTasksByAssignee(assigneeId: string, projectId: string): Promise<Tasks[]> {
    try {
      const tasksByAssignee: Tasks[] = await taskRepository.getTasksByAssignee(assigneeId, projectId)
      if (tasksByAssignee.length === 0) {
        throw new Error("No Tasks Found")
      }
      return tasksByAssignee
    } catch (error) {
      throw new CustomError(error.message, 404)
    }
  }
}

export default new TasksByAssignee()