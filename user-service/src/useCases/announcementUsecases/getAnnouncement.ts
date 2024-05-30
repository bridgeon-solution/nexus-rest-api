import { Announcement } from "../../entities/entityinterfaces.ts/announcement.interface";
import announcementRepository from "../../repositories/announcementRepository";
import CustomError from "../../utils/customErrorHandler";

class GetAnnouncement {
  constructor() { }
  async getAllAnnouncements() {
    try {
      const allAnnouncements: Announcement[] = await announcementRepository.findAll()
      return allAnnouncements
    } catch (error) {
      console.log('Error finding announcements', error)
      throw new CustomError(error.message, 500)
    }
  }
}

export default new GetAnnouncement()