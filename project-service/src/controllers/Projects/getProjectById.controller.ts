import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getProjectsUsecase from "../../usecases/projects/getProjects.usecase";
import { ProjectInterface } from "../../entities/project/projects.interface";

const getProjectById = catchAsync((async (req: Request, res: Response) => {
    const projectId: string = req.params.id;
    const data: ProjectInterface = await getProjectsUsecase.getProjectsById(projectId);

    if (data) {
        res.status(200).json({
            status: "success",
            data
        })
    } else {
        res.status(404).json({
            status: "NO projects",
        })
    }

}))

export { getProjectById }