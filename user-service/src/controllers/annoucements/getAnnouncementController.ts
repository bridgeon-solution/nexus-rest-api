import { Request, Response } from "express";
import catchAsync from "../../middlewares/asyncErrorHandler";
import { Announcement } from "../../entities/entityinterfaces.ts/announcement.interface";
import getAnnouncement from "../../useCases/announcementUsecases/getAnnouncement";

const getAllAnnouncements = catchAsync(async (req: Request, res: Response) => {
  const allAnnouncements: Announcement[] = await getAnnouncement.getAllAnnouncements()
  res.status(200).json({
    status: 'sucess',
    data: allAnnouncements
  })
})

export default getAllAnnouncements