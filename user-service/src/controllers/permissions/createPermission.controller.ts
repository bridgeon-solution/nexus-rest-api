import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import createPermissonUsecase from "../../usecases/permissions/createPermisson.usecase";

const createPermission = catchAsync(async (req: Request, res: Response) => {
  const permissionName: string = req.body.name;
  const createdPermission = await createPermissonUsecase.createPermission(permissionName)
  res.status(200).json({
    status: 'success',
    data: createdPermission
  })
})

export default createPermission