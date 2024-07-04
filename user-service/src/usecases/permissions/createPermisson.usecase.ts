import { PrismaClient } from "@prisma/client";
import CustomError from "../../utils/customErrorHandler";

const prisma = new PrismaClient()

class CreatePermission {
  async createPermission(permissionName: string) {
    try {
      const create = await prisma.permissions.create({
        data: {
          name: permissionName
        }
      })
      return create
    } catch (error) {
      throw new CustomError(error.message, 500)
    }
  }
}

export default new CreatePermission()