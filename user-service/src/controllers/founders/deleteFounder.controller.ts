import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import deleteFounderUsecases from "../../usecases/founders/deleteFounder.usecases";



const deleteFounder = catchAsync(async (req: Request, res: Response) => {
    const founder: string = req.params.id;
    const createdFounder = await deleteFounderUsecases.deleteFounder(founder)
    res.status(200).json({
        status: 'success',
        data: createdFounder
    })
})



export default deleteFounder