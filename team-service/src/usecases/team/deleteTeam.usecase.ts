import { Teams } from "../../entities/interfaces/team.interface";
import teamRepository from "../../repositories/team.repository";
import CustomError from "../../utils/customErrorHandler";

class DeleteTeam {
  async deleteTeam(teamId: string): Promise<Teams> {
    try {
      const deletedTeam: Teams = await teamRepository.deleteTeam(teamId);
      if (!deletedTeam) {
        throw new Error("data does not exists")
      }
      return deletedTeam
    } catch (error) {
      throw new CustomError(error.message, 500)
    }
  }
}

export default new DeleteTeam()