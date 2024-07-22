import { ObjectId } from "mongoose"

export interface Tasks {
  _id?: ObjectId,
  title: string,
  dueDate: Date,
  assignedTo: number,
  status?: 'Todo' | 'In Progress' | 'On Hold' | 'Done',
  projectId: string
}