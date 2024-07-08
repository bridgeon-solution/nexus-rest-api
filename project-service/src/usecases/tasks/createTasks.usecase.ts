import { Tasks } from "../../entities/project/tasks.interface";
import taskRepository from "../../repositories/task.repository";
import CustomError from "../../utils/customErrorHandler";

class CreateTasks {
  async createTasks(tasksData: Tasks): Promise<Tasks> {
    try {
      const createdTasks: Tasks = await taskRepository.createTasks(tasksData)
      return createdTasks
    } catch (error) {
      throw new CustomError(error.message, 500)
    }

  }
}

export default new CreateTasks()