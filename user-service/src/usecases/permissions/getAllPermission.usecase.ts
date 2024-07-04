import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class AllPermissions {
  async allPermission() {
    try {
      const allPermission = await prisma.permissions.findMany()
      return allPermission
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default new AllPermissions()