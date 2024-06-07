import { Founder, FounderSignup } from "../../enitities/entityClasses/founder.interface";
import employeesRepository from "../../repositories/employees.repository";
import founderRepostory from "../../repositories/founder.repostory";
import CustomError from "../../utils/customErrorHandler";
import hashPassword from "../../utils/hashPassword";

class CreateEmployee {
  async createEmployee(founderDatas: FounderSignup) {
    try {
      founderDatas.password = await hashPassword(founderDatas.password)
      const createdEmployee: Founder = await founderRepostory.createFounder(founderDatas)
      return createdEmployee
    } catch (error: any) {
      console.log(`Error creating founder : `, error)
      throw new CustomError(error.message, 500)
    }
  }
}

export default new CreateEmployee()