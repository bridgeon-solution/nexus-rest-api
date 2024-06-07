import { PrismaClient } from "@prisma/client";
import { Founder, FounderSignup, UpdateFounder } from "../enitities/entityClasses/founder.interface";

const prisma = new PrismaClient()

class FounderRepository {
  async createFounder(founderData: FounderSignup) {
    const createdFounder: Founder = await prisma.founders.create({
      data: founderData
    })
    return createdFounder
  }
  async findAll() {
    const allFounders: Founder[] = await prisma.founders.findMany()
    return allFounders
  }
  async findById(founderId: number) {
    const founderById: Founder | null = await prisma.founders.findUnique({
      where: { id: founderId }
    })
    return founderById
  }

  async delete(founderId: number) {
    const deleteFounder: Founder = await prisma.founders.delete({
      where: { id: founderId }
    })
    return deleteFounder
  }

  async update(updateData: UpdateFounder) {
    const employeeId: number = parseInt(updateData.employeeId)
    const updatedFounder: Founder = await prisma.founders.update({
      where: { id: employeeId },
      data: updateData.employeeData
    })
    return updatedFounder
  }
}

export default new FounderRepository()