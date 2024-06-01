import { Employee } from "../../entities/entityInterfaces/Employee.interface";
import employeeRepository from "../../respositories/employeeRepository";
import hashPassword from "../../utils/hashPassword";

class CreateEmployee {
  constructor() { }
  async createEmployee(employeeDatas: Employee) {
    employeeDatas.password = await hashPassword(employeeDatas.password)
    const createdEmployee: Employee = await employeeRepository.create(employeeDatas);
    return createdEmployee
  }
}

export default new CreateEmployee()

