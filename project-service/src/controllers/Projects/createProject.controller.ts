import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import createProjectUsecase from "../../usecases/projects/createProject.usecase";
import { ProjectInterface } from "../../entities/project/projects.interface";

const createProject = catchAsync((async (req: Request, res: Response) => {
    const teamId: string = req.params.id;
    const projectData: ProjectInterface = req.body;
    projectData.team = teamId
    projectData.startDate = new Date(projectData.startDate);
    projectData.endDate = new Date(projectData.endDate);
    
    const data:ProjectInterface = await createProjectUsecase.createProject(projectData);
    if (data) {
        res.status(201).json({
            status:"success",
            data
        })
    } else {
        res.status(404).json({
            status:"Something went wrong",
            data
        })
    }
}))

export { createProject }