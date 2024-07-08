import projectModel from "../../databases/schema/project.schema";
import CustomError from "../../utils/customErrorHandler";


class GetProjectByTeamLead {
  async getProject(teamLead: string) {
    try {
      const project = await projectModel.find({ teamLeadId: teamLead })
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