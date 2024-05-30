import { Request, Response } from "express";
import catchAsync from "../../middlewares/asyncErrorHandler";
import { Announcement, AnnouncementData } from "../../entities/entityinterfaces.ts/announcement.interface";
import createAnnouncementUsecase from "../../useCases/announcementUsecases/createAnnouncement.usecase";

const createAnnouncement = catchAsync(async (req: Request, res: Response) => {
  const announcement: AnnouncementData = req.body;
  const createdAnnoucement: Announcement = await createAnnouncementUsecase.createAnnouncement(announcement);
  res.status(201).json({
    status: 'success',
    data: createdAnnoucement
  })
})


export default createAnnouncement
