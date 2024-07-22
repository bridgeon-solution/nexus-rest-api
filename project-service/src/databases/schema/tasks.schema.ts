import mongoose, { mongo } from "mongoose";
import { Tasks } from "../../entities/project/tasks.interface";

const taskSchema = new mongoose.Schema<Tasks>({
  title: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  assignedTo: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Todo', 'In Progress', 'on Hold', 'Done'],
    default: 'Todo'
  },
  projectId: {
    type: String,
    ref: 'Project',
    required: true
  }
}, { timestamps: true })

const TasksModel = mongoose.model("Tasks", taskSchema)

export default TasksModel