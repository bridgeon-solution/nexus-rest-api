import { PrismaClient } from "@prisma/client";
import employeesRepository from "../../repositories/employees.repository";
import { Employee, EmployeePagination } from "../../enitities/entityClasses/employee.interface";

class GetEmployee {
  constructor() { }
  async getAllEmployeesPaginated(page: number, pageSize: number) {
    const skip: number = (page - 1) * pageSize;
    const take: number = pageSize;
    const employees: EmployeePagination = await employeesRepository.paginatedFindAll(skip, take);
    return employees;
  }

  async getAllEmployees(): Promise<Employee[]> {
    const employees: Employee[] = await employeesRepository.findAll();
    return employees;
  }

  async getEmployeeById(employeeId: number) {
    const employee: Employee = await employeesRepository.findOne(employeeId);
    return employee;
  }
}

export default new GetEmployee()