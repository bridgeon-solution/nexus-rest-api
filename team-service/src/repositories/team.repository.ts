import team from "../databases/schemas/team.schema";
import { TeamBody, Teams } from "../entities/interfaces/team.interface";

class TeamRepository {
  async createTeam(teamData): Promise<Teams> {
    if (teamData) {
      const createdTeam = await team.create(teamData)
      return createdTeam as unknown as Teams
    }
  }
  async deleteTeam(teamId: string): Promise<Teams> {
    if (teamId) {
      const deletedTeam = await team.findByIdAndDelete(teamId)
      return deletedTeam as unknown as Teams
    }
  }

  async updateTeam(teamId: string, updateData: TeamBody): Promise<Teams> {
    if (teamId) {
      const updatedTeam = await team.findByIdAndUpdate(teamId, { name: updateData.name }, { new: true });
      return updatedTeam as unknown as Teams
    }
  }

  async allTeams(): Promise<Teams[]> {
    const allTeams = await team.find();
    console.log(allTeams);
    
    return allTeams as unknown as Teams[]
  }

  async teamById(teamId: string): Promise<Teams> {
    const teambyId = await team.findById(teamId);
    return teambyId as unknown as Teams
  }

  async allTeamsTL(teamLeadId: number): Promise<Teams[]> {
    const allTeams = await team.find({ teamLead: teamLeadId });
    return allTeams as unknown as Teams[]
  }
}

export default new TeamRepository()