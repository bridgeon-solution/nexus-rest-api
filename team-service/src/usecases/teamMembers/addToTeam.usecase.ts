import team from "../../databases/schemas/team.schema";
import { Team, Teams } from "../../entities/interfaces/team.interface";
import CustomError from "../../utils/customErrorHandler";

class AddToTeam {
  async addToTeam(employeeId: number, teamId: string) {

    try {
      const findTeam = await team.findById(teamId)
      console.log(findTeam)
      console.log(findTeam)
      if (!findTeam) {
        throw new Error("Team Not Found")
      }
      const existingMemberInTeam = findTeam.members.indexOf(employeeId);
      if (existingMemberInTeam !== -1) {
        throw new Error("Member already exist in the team")
      } else {
        findTeam.members.push(employeeId);
        await findTeam.save()
        return findTeam
      }
    } catch (error) {
      throw new CustomError(error.message, 500)
    }
  }
}

export default new AddToTeam()