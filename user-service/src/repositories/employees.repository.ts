import { PrismaClient } from "@prisma/client"
import { Employee, UpdateEmployees } from "../enitities/entityClasses/employee.interface";
import CustomError from "../utils/customErrorHandler";
import { EmployeePagination } from "../enitities/entityClasses/employee.interface";


const prisma = new PrismaClient()

class EmployeeRepository {
  constructor() { }

  async create(employee: any) {
    try {
      const createdEmployee: Employee = await prisma.employee.create({
        data: employee,
        include: { department: true }
      });
      const permissions = await prisma.permissions.findMany();
      const createPermissions = permissions.map(permission => {
        return prisma.employeePermissions.create({
          data: {
            employeeId: createdEmployee.id,
            permissonsId: permission.id,
            enabled: false
          }
        })
      })

      await Promise.all(createPermissions)
      return createdEmployee
    } catch (error) {
      console.log(error);
      throw new CustomError(error.message, 500)
    }
  }

  async delete(employeeId: number) {
    const deleteEmployee: Employee = await prisma.employee.delete({
      where: { id: employeeId }
    });
    return deleteEmployee
  }

  async findOne(employeeId: number) {
    const employee: Employee | null = await prisma.employee.findUnique({
      where: { id: employeeId },
      include: { department: true }
    })
    return employee
  }

  async findAll():Promise<Employee[]> {

    try {
      const employees: Employee[] = await prisma.employee.findMany(
        { include: { department: true } })
      return employees

    } catch (error) {
      console.log(error);
    }
  }

  async paginatedFindAll(skip: number, take: number):Promise<EmployeePagination> {

    try {
      const employee = await prisma.employee.findMany({
        skip,
        take,
        include:{department: true}
        
      })
      const totalEmployees = await prisma.employee.count();

      const data: EmployeePagination = {
        data: employee,
        total: totalEmployees,
      }
      return data

      // const employees: Employee[] = await prisma.employee.findMany(
      //   { include: { department: true } })
      // return employees

    } catch (error) {
      console.log(error);
    }
  }

  async update(employeeData: UpdateEmployees) {
    const employeeId: number = parseInt(employeeData.employeeId);

    const updatedEmployee: Employee = await prisma.employee.update({
      where: { id: employeeId },
      data: employeeData.employeeData
    });
    return updatedEmployee
  }

  async deduction(employeeId: number, deduction: number) {
    const employeeDeduction: Employee = await prisma.employee.update({
      where: { id: employeeId },
      data: { deduction }
    })
  }

}

export default new EmployeeRepository()