import { Department } from "../../entities/entityInterfaces/Department.interface";
import { DepartmentRepository } from "../../respositories/departmentRepository"

const departmentRepository = new DepartmentRepository()

export class DeleteDepartment {
  constructor() { }
  async deleteDepartment(departmentId: number) {
    const deletedDepartment = departmentRepository.deleteDepartment(departmentId);
    return deletedDepartment

  }

}