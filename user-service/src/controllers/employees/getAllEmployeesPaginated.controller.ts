import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import { Employee, EmployeePagination } from "../../enitities/entityClasses/employee.interface";
import getEmployeeUsecase from "../../usecases/employees/getEmployee.usecase";


const getAllEmployeesPaginate = catchAsync(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string);
  const getEmployees: EmployeePagination = await getEmployeeUsecase.getAllEmployeesPaginated(page, pageSize)
  res.status(200).json({
    status: 'success',
    data: getEmployees
  })
})



export { getAllEmployeesPaginate };
