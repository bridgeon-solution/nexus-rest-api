import { DepartmentRepository } from "../../respositories/departmentRepository"


const departmentRepository = new DepartmentRepository()

export class GetDepartment {
  constructor() { }
  async getAllDepartments() {
    const departments = departmentRepository.findAll()
    return departments
  }

  async getDepartmentById(departmentId) {
    const department = departmentRepository.findById(departmentId)
  }
} 