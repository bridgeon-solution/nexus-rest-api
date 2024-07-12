import { Employee } from "../../enitities/entityClasses/employee.interface";
import employeesRepository from "../../repositories/employees.repository";
import CustomError from "../../utils/customErrorHandler";
import messageBroker from "../../utils/messageBroker";

class GetEmployeeBroker {
  async getEmployeeId(employeeId: number) {
    try {
      const employee: Employee = await employeesRepository.findOne(employeeId);
      const data = {
        status: 'success',
        employee: employee
      }
      await messageBroker.sendMessage("EmployeeById", data)
      if (!employee) {
        throw new Error("Employee Not Found")
      }
    } catch (error: any) {
      console.log(error.message)
      const data = {
        status: 'failed',
        message: error.message
      }
      await messageBroker.sendMessage("EmployeeId", data)
    }
  }
  async getAllEmployees() {
    try {
      const employee: Employee[] = await employeesRepository.findAll();
      const data = {
        status: 'success',
        employee: employee
      }

      await messageBroker.sendMessage("EmployeeId", data);
      await messageBroker.sendMessage("Employees", data);

      if (!employee) {
        throw new Error("Employee Not Found")
      }
    } catch (error: any) {
      console.log(error.message)
      const data = {
        status: 'failed',
        message: error.message
      }
      await messageBroker.sendMessage("EmployeeId", data)
    }
  }

  async getTeamMeambers(ids: number[]) {
    try {
      const members = await employeesRepository.getTeamMembers(ids);
      const data = {
        status: 'success',
        employee: members
      }
      await messageBroker.sendMessage('teamMembers', data)
      if (!members) {
        new CustomError('Something wrong', 404)
      }
    } catch (error) {
      const data = {
        status: 'failed',
        message: error.message
      }
      await messageBroker.sendMessage("teamMembers", data);
    }
  }
}

export default new GetEmployeeBroker()