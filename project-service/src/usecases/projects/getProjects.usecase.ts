import { ProjectDetailedInterface, ProjectInterface } from "../../entities/project/projects.interface";
import projectRepository from "../../repositories/project.repository";
import { generateLogo } from "../../utils/projectLogoGeneration";
import getProjectTeamUsecase from "./getProjectTeam.usecase";

class GetProjects {
    // fucntion for getting all Projects
    async getAllProjects(): Promise<ProjectInterface[]> {
        const data: ProjectInterface[] = await projectRepository.getAll();
        return data
    }
    // function for getting project by id (specific project)
    async getProjectsById(id: string): Promise<ProjectInterface> {
        const data: ProjectInterface = await projectRepository.getOne(id);
        return data
    }

}

export default new GetProjects()