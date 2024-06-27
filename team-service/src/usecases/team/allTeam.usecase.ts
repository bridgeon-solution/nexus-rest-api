import teamRepository from "../../repositories/team.repository";
import { Teams } from "../../entities/interfaces/team.interface";
import CustomError from "../../utils/customErrorHandler";

class AllTeams {
  async getAllTeams(): Promise<Teams[]> {
    try {
      const allTeams: Teams[] = await teamRepository.allTeams()
      if (allTeams.length === 0) {
        throw new Error("teams not created")
      }
      return allTeams
    } catch (error: any) {
      throw new CustomError(error.message, 500)
    }

  }
  async getAllTeamsByTeamLead(teamLeadId: number): Promise<Teams[]> {
    try {
      const allTeams: Teams[] = await teamRepository.allTeamsTL(teamLeadId)
      return allTeams
    } catch (error) {
      console.log(error)
      throw new CustomError(error.message, 500)
    }
  }
}

export default new AllTeams()