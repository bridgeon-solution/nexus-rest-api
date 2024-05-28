import Employee from "../../entities/entityInterfaces/Employee.interface";
import employeeRepository from "../../respositories/employeeRepository";

class CreateEmployee {
  constructor() { }
  async createEmployee(employeeDatas: Employee) {
    const createdEmployee = employeeRepository.create(employeeDatas);
    return createdEmployee
  }
}

export default new CreateEmployee()

