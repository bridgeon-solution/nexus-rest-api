import { Department } from "../../entities/entityInterfaces/Department.interface"
import departmentRepository from "../../respositories/departmentRepository";

class CreateDepartment {
  constructor() {
  }
  async createDepartment(departmentData: Department): Promise<Department> {
    const department: Department = await departmentRepository.createDepartment(departmentData);
    return department
  }
}


export default new CreateDepartment()