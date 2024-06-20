import { Department } from "../../enitities/entityClasses/department.interface";
import departmentRepository from "../../repositories/department.repository";

class DeleteDepartment {
  constructor() { }
  async deleteDepartment(departmentId: number) {
    const deletedDepartment: Department = await departmentRepository.deleteDepartment(departmentId);
    return deletedDepartment
  }
}

export default new DeleteDepartment()