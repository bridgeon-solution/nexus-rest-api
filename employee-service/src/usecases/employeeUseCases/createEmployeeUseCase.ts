import Employee from "../../entities/entityInterfaces/Employee.interface";

import { EmployeeRepository } from "../../respositories/employeeRepository";

const employeeRepository = new EmployeeRepository

export class CreateEmployee {
  constructor() { }
  async createEmployee(employeeDatas: Employee) {
    const createdEmployee = employeeRepository.create(employeeDatas);
    return createdEmployee
  }
}