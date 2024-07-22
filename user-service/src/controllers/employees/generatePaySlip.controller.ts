import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import updateEmployeeUsecase from "../../usecases/employees/updateEmployee.usecase";


const generatePaySlip = catchAsync(async (req: Request, res: Response) => {
    const employeeId: string = req.params.id;
    const data = await updateEmployeeUsecase.generatePaySlip(employeeId);
    if (data) {
        res.status(200).json({
            status: "success",
            data
        })
    } else {
        res.status(404).json({
            status: "Not Founde"
        })
    }
})



export { generatePaySlip };
