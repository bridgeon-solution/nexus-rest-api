import { PrismaClient } from "@prisma/client";
import LoginData from "../../enitities/entityClasses/loginData.interface";
import bcrypt from 'bcrypt'
import { Founder } from "../../enitities/entityClasses/founder.interface";
import { Employee } from "../../enitities/entityClasses/employee.interface";
import CustomError from "../../utils/customErrorHandler";
import generateToken from "../../utils/jsonwebtoken";

const prisma = new PrismaClient()

class Auth {
  constructor() { }
  async authorizeUser(loginData: LoginData): Promise<{ employee?: Employee, founder?: Founder, token: string }> {
    try {
      // 1. founder login
      const founder: Founder | null = await prisma.founders.findUnique({
        where: { email: loginData.email }
      })
      if (founder) {
        const isMatch: boolean = await bcrypt.compare(loginData.password, founder.password)
        if (isMatch) {
          const token: string = generateToken(founder.id, founder.role)
          return { founder, token } // early return successfull founder login
        } else {
          throw new CustomError("password doesnt match please try again!", 500)
        }
      }


      //2 . employee login
      const employee: Employee | null = await prisma.employee.findUnique({
        where: { email: loginData.email }
      })
      if (employee && !founder) {
        const isMatch: boolean = await bcrypt.compare(loginData.password, employee.password)
        if (isMatch) {
          const token: string = generateToken(employee.id, employee.role)
          return { employee, token }
        } else {
          throw new CustomError("password doesnt match please try again!", 500)
        }
      } else {
        throw new CustomError("User not found ", 404)
      }

    } catch (error: any) {
      console.log(loginData.email)
      console.log(`Error logging in `, error)
      throw new CustomError(error.message, error.statusCode)
    }

  }
}


export default new Auth()