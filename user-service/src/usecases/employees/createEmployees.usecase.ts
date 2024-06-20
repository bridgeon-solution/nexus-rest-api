
import { Employee } from "../../enitities/entityClasses/employee.interface";
import employeesRepository from "../../repositories/employees.repository";
import hashPassword from "../../utils/hashPassword";

class CreateEmployee {
  constructor() { }
  async createEmployee(employeeDatas: Employee) {
    employeeDatas.password = await hashPassword(employeeDatas.password)
    const createdEmployee: Employee = await employeesRepository.create(employeeDatas);
    return createdEmployee
  }
}

export default new CreateEmployee()

