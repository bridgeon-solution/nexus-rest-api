import { ProjectInterface } from "../../entities/project/projects.interface"
import projectRepository from "../../repositories/project.repository"
import messageBroker from "../../utils/messageBroker";

class GetProjectTeam {
    constructor() { }

    async getTeam(projectId: string) {
        const project: ProjectInterface = await projectRepository.getOne(projectId);
        try {
            await messageBroker.sendMessage("project", project.team);
            await messageBroker.listenForResponse("projectResponse")
            messageBroker.on("dataRecieved", async (data: { status: string, data: any }) => {
                try {
                    console.log(data);
                    
                } catch (error) {

                }
            })
        } catch (error) {

        }
    }
}

export default new GetProjectTeam()