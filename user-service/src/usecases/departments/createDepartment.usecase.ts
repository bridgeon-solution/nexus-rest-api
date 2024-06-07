import { Department } from "@prisma/client";
import departmentRepository from "../../repositories/department.repository";
departmentRepository

class CreateDepartment {
  constructor() {
  }
  async createDepartment(departmentData: Department): Promise<Department> {
    const department: Department = await departmentRepository.createDepartment(departmentData);
    return department
  }
}


export default new CreateDepartment()