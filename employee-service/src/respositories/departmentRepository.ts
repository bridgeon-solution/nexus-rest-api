import Prisma, { PrismaClient } from '@prisma/client'
import { Department } from '../entities/entityInterfaces/Department.interface'


const prisma = new PrismaClient()
export class DepartmentRepository {
  async createDepartment(department: any) {
    const createDepartment = await prisma.department.create({
      data: department
    })
    console.log(createDepartment)
    return createDepartment
  }

  async findById(departmentId: number) {
    const department = prisma.department.findUnique({
      where: { id: departmentId }
    })
    return department
  }

  async findAll() {
    const departments = prisma.department.findMany()
    return departments
  }

  async deleteDepartment(departmentId: number) {
    const deletedDepartment = prisma.department.delete({
      where: { id: departmentId }
    })
    return deletedDepartment
  }
}
