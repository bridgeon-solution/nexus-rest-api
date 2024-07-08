import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getPayRollUsecase from "../../usecases/payRoll/getPayRoll.usecase";

const getPaySlipById = catchAsync(async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const data = await getPayRollUsecase.getPaySlipById(id);

    res.status(200).json({
        status: "success",
        data
    })
})

export { getPaySlipById }