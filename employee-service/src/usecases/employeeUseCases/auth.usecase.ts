import { Employee, LoginData } from "../../entities/entityInterfaces/Employee.interface";
import { PrismaClient } from "@prisma/client";
import CustomError from "../../utils/customErrorHandler";
import bcrypt from 'bcrypt'
import generateToken from "../../utils/jsonwebtoken";

const prisma = new PrismaClient()
class AuthorizeEmployee {
  constructor() { }
  async authorizeEmployee(loginData: LoginData) {
    try {
      const checkEmployee = await prisma.employee.findUnique({
        where: { email: loginData.email }
      })
      if (!checkEmployee) {
        throw new CustomError("user not found", 404)
      }
      if (checkEmployee) {
        const isMatch: boolean = await bcrypt.compare(loginData.password, checkEmployee.password)
        if (isMatch) {
          const token: string = generateToken(checkEmployee.id, checkEmployee.role)
          return { checkEmployee, token }
        }
        if (!isMatch) {
          throw new CustomError("password doesnt match please try again!", 500)
        }
      }
    } catch (error: any) {
      throw new CustomError(error.message, error.statusCode)
    }
  }
}

export default new AuthorizeEmployee