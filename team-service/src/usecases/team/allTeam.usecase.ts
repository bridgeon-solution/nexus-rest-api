import teamRepository from "../../repositories/team.repository";
import { Teams } from "../../entities/interfaces/team.interface";
import CustomError from "../../utils/customErrorHandler";
import messageBroker from "../../utils/messageBroker";
import { Employee } from "../../entities/interfaces/employee.interface";

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
      const allTeams: Teams[] = await teamRepository.allTeamsTL(teamLeadId);
      // console.log(allTeams);
      await messageBroker.sendMessage("getEmployeeById",5)
      await messageBroker.listenForResponse("EmployeeById");
      messageBroker.on("dataRecieved", async (data: { status: string, employee: Employee[] }) => {
        try {
          console.log(data);
          
          // const teamMembersData: TeamWithMembers = { team: teamData, members: data.employee };
          // resolve(teamMembersData);  // Resolve the promise with leaveData
        } catch (error) {
          console.log(error);
          // reject(error);  // Reject the promise if an error occurs
        }
      });
      return allTeams
    } catch (error) {
      console.log(error)
      throw new CustomError(error.message, 500)
    }
  }
}

export default new AllTeams()