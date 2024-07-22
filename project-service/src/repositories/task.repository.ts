import TasksModel from "../databases/schema/tasks.schema";
import { Tasks } from "../entities/project/tasks.interface";

class TaskRepository {
  async createTasks(tasksData: Tasks): Promise<Tasks> {
    const createdTasks: Tasks = await TasksModel.create(tasksData)
    return createdTasks
  }

  async getTasksByProjectId(projectId: string): Promise<Tasks[]> {
    const tasksByProject: Tasks[] = await TasksModel.find({ projectId: projectId })
    return tasksByProject
  }

  async getTaskById(taskId: string): Promise<Tasks> {
    const taskById: Tasks = await TasksModel.findById(taskId)
    return taskById
  }

  async deleteTaskById(taskId: string): Promise<Tasks> {
    const deletedTasks: Tasks = await TasksModel.findByIdAndDelete(taskId)
    return deletedTasks
  }

  async getTasksByAssignee(assigneeId: string, projectId: string): Promise<Tasks[]> {
    const tasksByAssignee: Tasks[] = await TasksModel.find({ assignedTo: assigneeId, projectId: projectId })
    return tasksByAssignee
  }

}



export default new TaskRepository()