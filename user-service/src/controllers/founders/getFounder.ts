import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getAllFoundersUsecase from "../../usecases/founders/getAllFounders.usecase";

const getFounders = catchAsync(async (req: Request, res: Response) => {
    const data = await getAllFoundersUsecase.getFounders();
    res.status(200).json({
        status: 'success',
        data
    })
})

export { getFounders }