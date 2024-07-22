import { ObjectId } from "mongoose"
import { Employee } from "./employee.interface"

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
interface TeamWithMembers {
  team: Teams,
  members: Employee[],
}

interface TeamWithTeamLeader {
  team: Teams[],
  teamLeader: Employee,
}

export { Team, Teams, TeamBody, TeamWithMembers, TeamWithTeamLeader }