import express, { Express, Router } from "express"
import createAnnouncement from "../controllers/annoucements/createAnnouncementController";
import getAllAnnouncements from "../controllers/annoucements/getAnnouncementController";
import verifyRole from "../middlewares/protectRoutes";

const announcementRouter: Router = express.Router();

announcementRouter.post('/create', verifyRole(['founder']), createAnnouncement);
announcementRouter.get('/', getAllAnnouncements);
announcementRouter.delete('/:id')

export default announcementRouter
