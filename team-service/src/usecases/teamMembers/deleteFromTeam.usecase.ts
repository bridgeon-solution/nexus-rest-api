import team from "../../databases/schemas/team.schema";
import CustomError from "../../utils/customErrorHandler";

class DeleteFromTeam {
  async deleteFromTeam(employeeId: number, teamId: string) {
    try {
      const findTeam = await team.findById(teamId)
      if (!findTeam) {
        throw new Error("Team Not Found")
      }
      const indexToDelete: number = findTeam.members.indexOf(employeeId);
      findTeam.members.splice(indexToDelete, 1)
      findTeam.save()
      return findTeam
    } catch (error) {
      throw new CustomError(error.message, 500)
    }
  }
}

export default new DeleteFromTeam()