import { PrismaClient } from "@prisma/client"
import CustomError from "../../utils/customErrorHandler";

const prisma = new PrismaClient()

class AssignPermission {
  async assignPermission(permissionId: string, employeeId: string, enabled: boolean) {
    try {
      const existingPermission = await prisma.employeePermissions.findUnique({
        where: {
          employeeId_permissonsId: {
            employeeId: parseInt(employeeId),
            permissonsId: parseInt(permissionId)
          }
        }
      });

      let updatedPermission;
      if (existingPermission) {
        updatedPermission = await prisma.employeePermissions.update({
          where: {
            employeeId_permissonsId: {
              employeeId: parseInt(employeeId),
              permissonsId: parseInt(permissionId)
            }
          },
          data: {
            enabled: enabled
          }
        });
      } else {
        updatedPermission = await prisma.employeePermissions.create({
          data: {
            employeeId: parseInt(employeeId),
            permissonsId: parseInt(permissionId),
            enabled: enabled
          }
        });
      }
      return updatedPermission
    } catch (error) {
      throw new CustomError(error.message, 500)
    }
  }
}
export default new AssignPermission()