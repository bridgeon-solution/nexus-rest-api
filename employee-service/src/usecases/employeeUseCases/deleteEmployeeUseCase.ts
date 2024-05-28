import employeeRepository from "../../respositories/employeeRepository"

class DeleteEmployee {
  constructor() { }
  deleteEmployee(employeeId: number) {
    const deletedEmployee = employeeRepository.delete(employeeId)
    return deletedEmployee
  }
}

export default new DeleteEmployee()