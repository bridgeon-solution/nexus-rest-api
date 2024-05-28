import departmentRepository from "../../respositories/departmentRepository"

class GetDepartment {
  constructor() { }
  async getAllDepartments() {
    const departments = departmentRepository.findAll()
    return departments
  }

  async getDepartmentById(departmentId: any) {
    const department = departmentRepository.findById(departmentId)
    return department
  }
}

export default new GetDepartment()