import { PrismaClient } from "@prisma/client";
import LoginData from "../../entities/entityinterfaces.ts/loginData";
import { Founder } from "../../entities/entityinterfaces.ts/founder.interface";
import generateToken from "../../utils/jsonwebtoken";
import CustomError from "../../utils/customErrorHandler";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

class AuthorizeFounder {
  constructor() { }
  async authorizeFounder(loginDatas: LoginData): Promise<{ findFounder: Founder, token: string }> {
    try {
      const findFounder: Founder = await prisma.founders.findUnique({
        where: { email: loginDatas.email }
      });
      if (findFounder) {
        const isMatch = await bcrypt.compare(loginDatas.password, findFounder.password);
        if (isMatch) {
          const token: string = generateToken(findFounder.id, findFounder.role)
          return { findFounder, token }
        }
      }
    } catch (error) {
      console.log('Error logging in : ', error)
      throw new CustomError('Incorrect email or password', 404)
    }
  }
}

export default new AuthorizeFounder()