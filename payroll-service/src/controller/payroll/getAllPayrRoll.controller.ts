import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getPayRollUsecase from "../../usecases/payRoll/getPayRoll.usecase";

const getPayRoll = catchAsync(async (req: Request, res: Response) => {
    const data = await getPayRollUsecase.getPayRoll();

    res.status(200).json({
        status:"success",
        data
    })
})

export { getPayRoll }