import { PrismaClient } from "@prisma/client";
import { EmployeeRepository } from "../../respositories/employeeRepository";

const employeeRepository = new EmployeeRepository()

export class GetEmployee {
  constructor() { }
  async getAllEmployees() {
    const employees = await employeeRepository.findAll();
    return employees;
  }
  async getEmployeeById(employeeId) {
    const employee = await employeeRepository.findOne(employeeId);
    return employee;
  }
}