import { PrismaClient } from "@prisma/client";
import { Announcement, AnnouncementData } from "../entities/entityinterfaces.ts/announcement.interface";

const prisma = new PrismaClient()
class AnnouncementRepository {
  constructor() { }
  async create(announcement: AnnouncementData) {
    const createdAnnouncement: Announcement = await prisma.announcement.create({
      data: announcement
    })
    return createdAnnouncement
  }

  async findAll() {
    const allDepartments: Announcement[] = await prisma.announcement.findMany()
    return allDepartments
  }
}

export default new AnnouncementRepository()