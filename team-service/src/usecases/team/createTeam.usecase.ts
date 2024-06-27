import { TeamBody, Teams } from "../../entities/interfaces/team.interface";
import teamRepository from "../../repositories/team.repository";
import CustomError from "../../utils/customErrorHandler";

class CreateTeam {
  async createTeam(teamData: TeamBody, teamLead: number): Promise<Teams> {
    try {
      const teamDatas = {
        teamLead: teamLead,
        name: teamData.name
      }
      const createdTeam: Teams = await teamRepository.createTeam(teamDatas)
      return createdTeam
    } catch (error) {
      if (error.message.includes(`duplicate key`))
        throw new CustomError("Team already exists", 500)
    }
  }
}

export default new CreateTeam()