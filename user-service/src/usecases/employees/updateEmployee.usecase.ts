import { Employee, UpdateEmployees } from "../../enitities/entityClasses/employee.interface"
import employeesRepository from "../../repositories/employees.repository"
import hashPassword from "../../utils/hashPassword"


class UpdateEmployee {
  constructor() { }
  async updateEmployee(departmentData: UpdateEmployees) {
    departmentData.employeeData.password = await hashPassword(departmentData.employeeData.password)
    const employee = await employeesRepository.update(departmentData)
    return employee
  }

}

export default new UpdateEmployee()