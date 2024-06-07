import Prisma, { PrismaClient } from '@prisma/client'
import { Department, UpdateDepartments } from '../enitities/entityClasses/department.interface'

const prisma = new PrismaClient()
class DepartmentRepository {
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
    return department
  }

  async findAll() {
    const departments: Department[] = await prisma.department.findMany();
    return departments
  }

  async deleteDepartment(departmentId: number): Promise<Department> {
    const deletedDepartment: Department = await prisma.department.delete({
      where: { id: departmentId }
    })
    return deletedDepartment
  }

  async updateDepartment(updateData: UpdateDepartments) {
    const departmentId: number = parseInt(updateData.departmentId)
    const updatedDepartment: Department = await prisma.department.update({
      where: { id: departmentId },
      data: updateData.departmentData
    })
    return updatedDepartment
  }
}


export default new DepartmentRepository()