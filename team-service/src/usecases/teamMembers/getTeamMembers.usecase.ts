import { Employee } from "../../entities/interfaces/employee.interface";
import { Team, Teams, TeamWithMembers } from "../../entities/interfaces/team.interface";
import teamRepository from "../../repositories/team.repository";
import messageBroker from "../../utils/messageBroker";

class GetTeamMeambers {
    constructor() { }

    async getTeamMembers(teamID: string) {
        const teamData: Teams = await teamRepository.teamById(teamID);
        return new Promise(async (resolve, reject) => {
            try {
                await messageBroker.sendMessage("members", teamData.members);
                await messageBroker.listenForResponse("teamMembers");
                messageBroker.on("dataRecieved", async (data: { status: string, employee: Employee[] }) => {
                    try {
                        const teamMembersData: TeamWithMembers = { team: teamData, members: data.employee };
                        resolve(teamMembersData);  // Resolve the promise with leaveData
                    } catch (error) {
                        console.log(error);
                        reject(error);  // Reject the promise if an error occurs
                    }
                });
            } catch (error) {
                console.log(error);
                reject(error);  // Reject the promise if an error occurs in the initial steps
            }
        });
    }

    async getTeamMembersForProject(teamID: string) {
        const teamData: Teams = await teamRepository.teamById(teamID);
        console.log(teamData);

        return new Promise(async (resolve, reject) => {
            try {
                await messageBroker.sendMessage("members", teamData.members);
                await messageBroker.listenForResponse("teamMembers");
                messageBroker.on("dataRecieved", async (data: { status: string, employee: Employee[] }) => {
                    try {
                        const teamMembersData: TeamWithMembers = { team: teamData, members: data.employee };
                        const sendedData = {
                            status: "success",
                            teamMembersData
                        }
                        messageBroker.sendMessage("projectResponse", sendedData)
                    } catch (error) {
                        console.log(error);
                        reject(error);  // Reject the promise if an error occurs
                    }
                });
            } catch (error) {
                console.log(error);
                reject(error);  // Reject the promise if an error occurs in the initial steps
            }
        });
    }
}

export default new GetTeamMeambers()