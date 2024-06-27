import { TeamBody, Teams } from "../../entities/interfaces/team.interface";
import teamRepository from "../../repositories/team.repository";
import CustomError from "../../utils/customErrorHandler";

class UpdateTeam {
  async updateTeam(teamId: string, updateData: TeamBody): Promise<Teams> {
    try {
      const updatedTeam: Teams = await teamRepository.updateTeam(teamId, updateData);
      if (!updatedTeam) {
        throw new Error("data does not exists")
      }
      return updatedTeam
    } catch (error: any) {
      throw new CustomError(error.message, 500)
    }
  }
}

export default new UpdateTeam()