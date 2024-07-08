import { Employee, UpdateEmployees } from "../../enitities/entityClasses/employee.interface"
import { LeaveData } from "../../enitities/entityClasses/leaveData.interface"
import employeesRepository from "../../repositories/employees.repository"
import hashPassword from "../../utils/hashPassword"


class UpdateEmployee {
  constructor() { }
  async updateEmployee(departmentData: UpdateEmployees) {
    departmentData.employeeData.password = await hashPassword(departmentData.employeeData.password)
    const employee = await employeesRepository.update(departmentData)
    return employee
  }

  async updateDeduction(leaveData: LeaveData) {
    const employee: Employee = await employeesRepository.findOne(leaveData.employeeId);
    try {
      const baseSalary: number = employee.salary;
      console.log(leaveData.leaveType);

      switch (leaveData.leaveType) {
        case 'Sick Leave':
          let slDeduction: number = baseSalary / 30 * 3;
          await employeesRepository.deduction(leaveData.employeeId, slDeduction);
          break;

        case 'Casual Leave':
          let clDeduction: number = baseSalary / 30 * 2;
          await employeesRepository.deduction(leaveData.employeeId, clDeduction);
          break;

        case 'Annual Leave':
          let alDeduction: number = baseSalary / 30 * 5;
          await employeesRepository.deduction(leaveData.employeeId, alDeduction);
          break;

        case 'Unpaid Leave':
          let ulDeduction: number = baseSalary / 30 * 4;
          await employeesRepository.deduction(leaveData.employeeId, ulDeduction);
          break;

        default:
          break;
      }
    } catch (error) {

    }

  }

  async generatePaySlip(id: string):Promise<Employee> {
    const generate:Employee = await employeesRepository.updateIsGenerate(id);
    return generate
  }

}

export default new UpdateEmployee()