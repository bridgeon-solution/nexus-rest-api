import express, { Express, Router } from "express"
import createAnnouncement from "../controllers/annoucements/createAnnouncementController";
import getAllAnnouncements from "../controllers/annoucements/getAnnouncementController";

const announcementRouter: Router = express.Router();

announcementRouter.post('/create', createAnnouncement);
announcementRouter.get('/', getAllAnnouncements);
announcementRouter.delete('/:id')

export default announcementRouter
