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
      await messageBroker.sendMessage("EmployeeId", data)
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
      await messageBroker.sendMessage("EmployeeId", data)
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
}

export default new GetEmployeeBroker()