import Prisma, { PrismaClient } from '@prisma/client'
import { Department } from '../entities/entityInterfaces/Department.interface'


const prisma = new PrismaClient()
export class DepartmentRepository {
  async createDepartment(department: Department) {
    const createDepartment = await prisma.department.create({
      data: department
    })
    return createDepartment
  }

  async findById(departmentId: number) {
    const department = await prisma.department.findUnique({
      where: { id: departmentId }
    })
    if (!department) {
      throw new Error("Record to find does not exist")
    }
    return department
  }

  async findAll() {
    const departments: Department[] = await prisma.department.findMany();
    if (!departments) {
      throw new Error("No Departments found")
    }
    return departments
  }

  async deleteDepartment(departmentId: number) {
    const departmentExist = await prisma.department.findUnique({
      where: { id: departmentId }
    })
    if (!departmentExist) {
      return null
    }
    const deletedDepartment = await prisma.department.delete({
      where: { id: departmentId }
    })
    return deletedDepartment
  }
}
