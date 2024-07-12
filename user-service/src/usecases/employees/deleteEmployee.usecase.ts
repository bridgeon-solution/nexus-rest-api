import { Employee } from "../../enitities/entityClasses/employee.interface"
import employeesRepository from "../../repositories/employees.repository"
import messageBroker from "../../utils/messageBroker"


class DeleteEmployee {
  constructor() { }
  async deleteEmployee(employeeId: number) {
    const deletedEmployee: Employee = await employeesRepository.delete(employeeId)
    messageBroker.sendMessage("deleting", employeeId);
    if (deletedEmployee) {
      return deletedEmployee
    }
  }
}

export default new DeleteEmployee()