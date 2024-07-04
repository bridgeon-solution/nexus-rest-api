import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getProjectsUsecase from "../../usecases/projects/getProjects.usecase";
import { ProjectInterface } from "../../entities/project/projects.interface";

const getAllProjects = catchAsync((async (req: Request, res: Response) => {
    const data:ProjectInterface[] = await getProjectsUsecase.getAllProjects();

    res.status(200).json({
        status:"success",
        data
    })

}))

export { getAllProjects }