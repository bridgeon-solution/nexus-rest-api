import departmentRepository from "../../respositories/departmentRepository";

class DeleteDepartment {
  constructor() { }
  async deleteDepartment(departmentId: number) {
    const deletedDepartment = departmentRepository.deleteDepartment(departmentId);
    return deletedDepartment
  }
}

export default new DeleteDepartment()