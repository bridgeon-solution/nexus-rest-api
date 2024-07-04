import { ProjectInterface } from "../../entities/project/projects.interface";
import projectRepository from "../../repositories/project.repository";
import { generateLogo } from "../../utils/projectLogoGeneration";

class GetProjects {

    async getAllProjects():Promise<ProjectInterface[]> {
        const data:ProjectInterface[] = await projectRepository.getAll();
        return data
    }

}

export default new GetProjects()