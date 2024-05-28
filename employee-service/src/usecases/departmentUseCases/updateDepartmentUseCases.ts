import { UpdateDepartments } from "../../entities/entityInterfaces/Department.interface"
import departmentRepository from "../../respositories/departmentRepository"

class UpdateDepartment {
  constructor() { }
  async updateDepartment(departmentData: UpdateDepartments) {
    const departments = departmentRepository.updateDepartment(departmentData)
    return departments
  }

}

export default new UpdateDepartment()