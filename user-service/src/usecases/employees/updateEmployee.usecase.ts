import { Employee, UpdateEmployees } from "../../enitities/entityClasses/employee.interface"
import employeesRepository from "../../repositories/employees.repository"


class UpdateEmployee {
  constructor() { }
  async updateEmployee(departmentData: UpdateEmployees) {
    const employee = await employeesRepository.update(departmentData)
    return employee
  }

}

export default new UpdateEmployee()