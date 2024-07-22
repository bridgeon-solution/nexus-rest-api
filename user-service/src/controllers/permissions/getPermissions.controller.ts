import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getPermissionUsecase from "../../usecases/permissions/getPermission.usecase";

const getPermission = catchAsync(async (req: Request, res: Response) => {
  const employeeId: string = req.params.employeeId;
  const permission = await getPermissionUsecase.getpermission(employeeId)
  res.status(200).json({
    status: 'success',
    data: permission
  })
})

export default getPermission