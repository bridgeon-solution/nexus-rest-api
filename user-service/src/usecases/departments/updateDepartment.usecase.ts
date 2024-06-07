import { Department, UpdateDepartments } from "../../enitities/entityClasses/department.interface"
import departmentRepository from "../../repositories/department.repository"

class UpdateDepartment {
  constructor() { }
  async updateDepartment(departmentData: UpdateDepartments) {
    const departments: Department = await departmentRepository.updateDepartment(departmentData)
    return departments
  }

}

export default new UpdateDepartment()