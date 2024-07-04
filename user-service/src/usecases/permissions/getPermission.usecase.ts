import { PrismaClient } from "@prisma/client"
import CustomError from "../../utils/customErrorHandler"

const prisma = new PrismaClient()

class GetPermission {
  async getpermission(employeeId: string) {
    try {
      const permission = await prisma.employeePermissions.findMany({
        where: { employeeId: parseInt(employeeId) },
      })
      return permission
    } catch (error) {
      throw new CustomError(error.message, 500)
    }
  }
}

export default new GetPermission()