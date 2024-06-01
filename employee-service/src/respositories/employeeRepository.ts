import { PrismaClient } from "@prisma/client"
import { Employee, UpdateEmployees } from "../entities/entityInterfaces/Employee.interface";

const prisma = new PrismaClient()

class EmployeeRepository {
  constructor() { }
  async create(employee: any) {
    const createdEmployee: Employee = await prisma.employee.create({
      data: employee,
      include: { department: true }
    })
    return createdEmployee
  }

  async delete(employeeId: number) {
    const deleteEmployee: Employee = await prisma.employee.delete({
      where: { id: employeeId }
    });
    if (!deleteEmployee) {
      throw new Error('Record to delete does not exist')
    }
    return deleteEmployee
  }

  async findOne(employeeId: number) {
    const employee: Employee | null = await prisma.employee.findUnique({
      where: { id: employeeId },
      include: { department: true }
    })
    if (!employee) {
      throw new Error("Record not found");
    }
    return employee
  }

  async findAll() {
    const employees: Employee[] = await prisma.employee.findMany({ include: { department: true } })
    return employees
  }

  async update(employeeData: UpdateEmployees) {
    const employeeId: number = parseInt(employeeData.employeeId);
    const updatedEmployee: Employee = await prisma.employee.update({
      where: { id: employeeId },
      data: employeeData.employeeData
    });
    if (!updatedEmployee) {
      throw new Error("Record to update does not exist")
    }
    return updatedEmployee
  }

}

export default new EmployeeRepository()