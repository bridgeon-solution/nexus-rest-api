import { PrismaClient } from "@prisma/client";
import employeesRepository from "../../repositories/employees.repository";
import { Employee } from "../../enitities/entityClasses/employee.interface";

class GetEmployee {
  constructor() { }
  async getAllEmployees() {
    const employees: Employee[] = await employeesRepository.findAll();
    return employees;
  }
  async getEmployeeById(employeeId: number) {
    const employee: Employee = await employeesRepository.findOne(employeeId);
    return employee;
  }
}

export default new GetEmployee()