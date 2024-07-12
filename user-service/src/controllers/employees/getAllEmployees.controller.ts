import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getEmployeeUsecase from "../../usecases/employees/getEmployee.usecase";

const getAllEmployees = catchAsync(async (req: Request, res: Response) => {
    const getEmployees = await getEmployeeUsecase.getAllEmployees();

    res.status(200).json({
        status: 'success',
        data: getEmployees
    })
})

export { getAllEmployees }