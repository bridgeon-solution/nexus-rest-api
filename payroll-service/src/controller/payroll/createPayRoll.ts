    import { Request, Response } from "express";
    import createPayrollUsecase from "../../usecases/payRoll/createPayroll.usecase";
    import catchAsync from "../../utils/asyncErrorHandler";
    import { PayRoll } from "../../entities/entityClasses/payRoll.interface";

    const createPayRoll = catchAsync(async (req: Request, res: Response) => {
        const payRollData: PayRoll = req.body;
        const data = await createPayrollUsecase.createPayRoll(payRollData)
        res.status(200).json({
            status:"success",
            data
        })
    })

    export { createPayRoll }