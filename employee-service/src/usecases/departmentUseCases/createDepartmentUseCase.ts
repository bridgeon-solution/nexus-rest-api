import { Department } from "../../entities/entityInterfaces/Department.interface"
import { DepartmentRepository } from "../../respositories/departmentRepository"

const departmentRepository = new DepartmentRepository()

export class CreateDepartment {
  constructor() {
  }
  async createDepartment(departmentData: Department): Promise<Department> {
    const department: Department = await departmentRepository.createDepartment(departmentData);
    return department
  }
}