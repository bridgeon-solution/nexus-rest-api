import { ObjectId } from "mongoose"

interface Team {
  teamLead: number,
  name: string,
  members: [number],
}

interface TeamBody {
  name: string,
}

interface Teams {
  _id: ObjectId,
  teamLead: number,
  name: string,
  members: number[],
  updatedAt: Date
  createdAt: Date,
  __v?: number
}

export { Team, Teams, TeamBody }