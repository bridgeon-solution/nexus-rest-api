import { Tasks } from "../../entities/project/tasks.interface"
import taskRepository from "../../repositories/task.repository"
import CustomError from "../../utils/customErrorHandler"

class TasksByProject {
  async getTasksByProject(projectId: string): Promise<Tasks[]> {
    try {
      const tasksByProjects: Tasks[] = await taskRepository.getTasksByProjectId(projectId)
      if (tasksByProjects.length === 0) {
        throw new Error("No Tasks Found")
      }
      return tasksByProjects
    } catch (error) {
      throw new CustomError(error.message, 404)
    }
  }
}

export default new TasksByProject()