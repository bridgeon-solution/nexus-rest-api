import { Department } from "../../entities/entityInterfaces/Department.interface";
import { DepartmentRepository } from "../../respositories/departmentRepository"

const departmentRepository = new DepartmentRepository()

class DeleteDepartment {
  constructor() { }
  async deleteDepartment(departmentId: number): Promise<Department> {
    const deletedDepartment = departmentRepository.deleteDepartment(departmentId);
    return deletedDepartment

  }

}