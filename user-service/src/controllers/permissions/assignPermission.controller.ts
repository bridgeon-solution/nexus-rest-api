import { Request, Response } from "express";
import catchAsync from "../../utils/asyncErrorHandler";
import assignPermissionUsecase from "../../usecases/permissions/assignPermission.usecase";

const assignPermission = catchAsync(async (req: Request, res: Response) => {
  const enabled: boolean = req.body.enabled
  const employeeId: string = req.params.employeeId
  const permissionId: string = req.params.permissionId
  const assignedPermission = await assignPermissionUsecase.assignPermission(permissionId, employeeId, enabled)
  res.status(200).json({
    status: 'success',
    data: assignedPermission
  })
})

export default assignPermission