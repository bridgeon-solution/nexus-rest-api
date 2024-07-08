import { ObjectId } from "mongoose"

export interface Tasks {
  _id?: ObjectId,
  title: string,
  dueDate: Date,
  assignedTo: string,
  status: 'Todo' | 'In Progress' | 'On Hold' | 'Done',
  projectId: string
}