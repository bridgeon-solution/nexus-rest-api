import Prisma, { PrismaClient } from '@prisma/client'
import { Department, UpdateDepartments } from '../entities/entityInterfaces/Department.interface'


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
    const departmentExist: Department | null = await prisma.department.findUnique({
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

  async updateDepartment(updateData: UpdateDepartments) {
    const departmentId: number = parseInt(updateData.departmentId)
    const updatedDepartment: Department = await prisma.department.update({
      where: { id: departmentId },
      data: updateData.departmentData
    })
    if (!updatedDepartment) {
      throw new Error("Error updating department")
    }
    return updatedDepartment
  }
}


export default new DepartmentRepository()