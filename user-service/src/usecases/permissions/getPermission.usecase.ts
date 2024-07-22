import { PrismaClient } from "@prisma/client"
import CustomError from "../../utils/customErrorHandler"
import employeesRepository from "../../repositories/employees.repository"
import { Employee } from "../../enitities/entityClasses/employee.interface"

const prisma = new PrismaClient()

class GetPermission {
  async getpermission(employeeId: string) {
    try {
      const employeeFind: Employee = await employeesRepository.findOne(parseInt(employeeId))
      if (!employeeFind) {
        throw new Error("Employee not found")
      }
      const permission = await prisma.employeePermissions.findMany({
        where: { employeeId: parseInt(employeeId) },
        include: { permission: true }
      })
      return permission
    } catch (error) {
      throw new CustomError(error.message, 500)
    }
  }
}

export default new GetPermission()