import { Department } from "../../enitities/entityClasses/department.interface"
import departmentRepository from "../../repositories/department.repository"


class GetDepartment {
  constructor() { }
  async getAllDepartments() {
    const departments: Department[] = await departmentRepository.findAll()
    return departments
  }

  async getDepartmentById(departmentId: number) {
    const department: Department | null = await departmentRepository.findById(departmentId);
    return department
  }
}
  
export default new GetDepartment()