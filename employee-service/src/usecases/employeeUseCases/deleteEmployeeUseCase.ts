import { EmployeeRepository } from "../../respositories/employeeRepository";

const employeeRepository = new EmployeeRepository()

export class DeleteEmployee {
  constructor() { }
  deleteEmployee(employeeId) {
    const deletedEmployee = employeeRepository.delete(employeeId)
    return deletedEmployee
  }
}