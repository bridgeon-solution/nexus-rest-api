import { ProjectInterface } from "../../entities/project/projects.interface";
import projectRepository from "../../repositories/project.repository";
import { generateLogo } from "../../utils/projectLogoGeneration";

class CreatProject {

    async createProject(projectData: ProjectInterface): Promise<ProjectInterface> {
        console.log(projectData);
        try {
            if (!projectData.image || projectData.image === 'null') {
                console.log('sdlsdl');
                projectData.image = await generateLogo(projectData.name);

            }
            const data: ProjectInterface = await projectRepository.create(projectData);
            return data
        } catch (error) {

        }
    }

}

export default new CreatProject()