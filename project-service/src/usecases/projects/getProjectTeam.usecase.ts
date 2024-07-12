import { ProjectDetailedInterface, ProjectInterface, TeamWithMembers } from "../../entities/project/projects.interface"
import projectRepository from "../../repositories/project.repository"
import messageBroker from "../../utils/messageBroker";

class GetProjectTeam {
    constructor() { }
    async getTeam(projectId: string) {
        const project: ProjectInterface = await projectRepository.getOne(projectId);
        return new Promise(async (resolve, reject) => {
            await messageBroker.sendMessage("project", project.team);
            await messageBroker.listenForResponse("projectResponse")
            messageBroker.on("dataRecieved", async (receivedData: { status: string, teamMembersData: TeamWithMembers }) => {
                try {
                    const data: ProjectDetailedInterface = { project, team: receivedData.teamMembersData.team, members: receivedData.teamMembersData.members };
                    resolve(data);
                } catch (error) {

                }
            })
        })
    }
}

export default new GetProjectTeam()