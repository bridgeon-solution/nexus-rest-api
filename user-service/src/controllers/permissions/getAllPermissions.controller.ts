import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import getAllPermissionUsecase from "../../usecases/permissions/getAllPermission.usecase";

const getAllPermission = catchAsync(async (req: Request, res: Response) => {
  const allPermission = await getAllPermissionUsecase.allPermission()
  res.status(200).json({
    status: 'success',
    data: allPermission
  })
})

export default getAllPermission