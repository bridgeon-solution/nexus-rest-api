import { Teams } from "../../entities/interfaces/team.interface";
import teamRepository from "../../repositories/team.repository";
import CustomError from "../../utils/customErrorHandler";

class TeamById {
  async findTeamById(teamId: string): Promise<Teams> {
    try {
      const teamById: Teams = await teamRepository.teamById(teamId);
      
      return teamById
    } catch (error) {

      throw new CustomError(error.message, 500)
    }
  }
}

export default new TeamById()

