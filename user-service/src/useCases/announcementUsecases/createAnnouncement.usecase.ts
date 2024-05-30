import { Announcement, AnnouncementData } from "../../entities/entityinterfaces.ts/announcement.interface";
import announcementRepository from "../../repositories/announcementRepository";
import CustomError from "../../utils/customErrorHandler";

class CreateAnnouncement {
  constructor() { }
  async createAnnouncement(announcement: AnnouncementData) {
    try {
      const createdAnnouncement: Announcement = await announcementRepository.create(announcement);
      return createdAnnouncement
    } catch (error) {
      console.log(`Error creating announcement`, error);
      throw new CustomError(error.message, 500)
    }
  }
}

export default new CreateAnnouncement()