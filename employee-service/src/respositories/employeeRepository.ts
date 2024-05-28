import { PrismaClient } from "@prisma/client"
import Employee from "../entities/entityInterfaces/Employee.interface";



const prisma = new PrismaClient()

class EmployeeRepository {
  constructor() { }
  async create(employee: any) {
    const createdEmployee = await prisma.employee.create({
      data: employee
    })
    return createdEmployee
  }

  async delete(employeeId: number) {
    const deleteEmployee = await prisma.employee.delete({
      where: { id: employeeId }
    });
    if (!deleteEmployee) {
      throw new Error('Record to delete does not exist')
    }
    return deleteEmployee
  }

  async findOne(employeeId: number) {
    const employee = await prisma.employee.findUnique({
      where: { id: employeeId }
    })
    return employee
  }

  async findAll() {
    const employees = await prisma.employee.findMany()
    return employees
  }
}

export default new EmployeeRepository()