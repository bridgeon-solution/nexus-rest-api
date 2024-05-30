import { $Enums } from "@prisma/client";

export interface AnnouncementData {
  title: string,
  type: AnnouncementType,
  content: string
}

enum AnnouncementType {
  holiday = 'holiday',
  events = 'events'
}

export interface Announcement {
  id: number,
  title: string,
  type: $Enums.AnnouncementType,
  content: string,
  createdAt: Date,
  updatedAt: Date,
}