import { PrismaClient } from "@prisma/client"
import { Admin } from "../models/adminInterface"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()
const adminLoginSrvc = async (adminDatas: Admin): Promise<Admin> => {
  try {
    const username = adminDatas.username
    const findAdmin: Admin = await prisma.admin.findUnique({ where: { username } })
    if (!findAdmin) {
      throw new Error("Invalid username or password")
    }
    const passwordMatch = await bcrypt.compare(adminDatas.password, findAdmin.password)
    if (!passwordMatch) {
      throw new Error("Invalid username or password")
    }
    return findAdmin
  } catch (error) {
    console.error("Error during admin login : ", error)
  }

}


export {
  adminLoginSrvc
}