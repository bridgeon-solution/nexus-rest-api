
import { UpdateEmployees } from "../../entities/entityInterfaces/Employee.interface"
import employeeRepository from "../../respositories/employeeRepository"
class UpdateEmployee {
  constructor() { }
  async updateEmployee(departmentData: UpdateEmployees) {
    const employee = await employeeRepository.update(departmentData)
    return employee
  }

}

export default new UpdateEmployee()