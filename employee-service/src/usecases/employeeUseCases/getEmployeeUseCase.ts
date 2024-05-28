import { PrismaClient } from "@prisma/client";
import employeeRepository from "../../respositories/employeeRepository";


class GetEmployee {
  constructor() { }
  async getAllEmployees() {
    const employees = await employeeRepository.findAll();
    return employees;
  }
  async getEmployeeById(employeeId: number) {
    const employee = await employeeRepository.findOne(employeeId);
    return employee;
  }
}

export default new GetEmployee()