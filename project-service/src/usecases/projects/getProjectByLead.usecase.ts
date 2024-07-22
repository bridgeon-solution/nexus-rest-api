import projectModel from "../../databases/schema/project.schema";
import { ProjectInterface } from "../../entities/project/projects.interface";
import CustomError from "../../utils/customErrorHandler";


class GetProjectByTeamLead {
  async getProject(teamLead: string) {
    try {
      const project: ProjectInterface[] = await projectModel.find({ teamLeadId: teamLead });
      if (!project) {
        throw new Error("no projects created")
      }
      return project
    } catch (error) {
      throw new CustomError(error.message, 500)
    }
  }
}


export default new GetProjectByTeamLead()