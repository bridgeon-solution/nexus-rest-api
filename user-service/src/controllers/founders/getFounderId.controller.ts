import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import founderByIdUsecase from "../../usecases/founders/founderById.usecase";

const founderById = catchAsync(async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const founderFinded = await founderByIdUsecase.getFounder(id);
    if (founderFinded) {
        res.status(200).json({
            status: 'success',
            data: founderFinded
        })
    }
})

export { founderById }