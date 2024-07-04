import projectModel from "../databases/schema/project.schema";
import { ProjectInterface } from "../entities/project/projects.interface";

class Project {
    async create(projectData: ProjectInterface):Promise<ProjectInterface> {
        try {
            const data = new projectModel(projectData)
            await data.save();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll():Promise<ProjectInterface[]> {
        try {
            const data:ProjectInterface[] = await projectModel.find({});
            return data
        } catch (error) {
            
        }
    }
}

export default new Project()