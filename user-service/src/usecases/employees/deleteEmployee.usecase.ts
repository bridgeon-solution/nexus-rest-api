import { Employee } from "../../enitities/entityClasses/employee.interface"
import employeesRepository from "../../repositories/employees.repository"


class DeleteEmployee {
  constructor() { }
  async deleteEmployee(employeeId: number) {
    const deletedEmployee: Employee = await employeesRepository.delete(employeeId)
    return deletedEmployee
  }
}

export default new DeleteEmployee()