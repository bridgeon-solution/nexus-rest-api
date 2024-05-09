import exp from 'express';
import { founderController } from '../controllers/founder/founderControllers';
import { founderProfileimgUpload } from '../middlewares/founderImage';

export const FounderRouter = exp.Router();


FounderRouter.post('/signup', founderProfileimgUpload, founderController.founderSignup)
FounderRouter.get('/founders', founderController.getAllFounders)
FounderRouter.get('/founders/:id', founderController.foundersById)
FounderRouter.put('/founders/:id', founderProfileimgUpload, founderController.updateFounder)
FounderRouter.delete('/founders/:id', founderController.deleteFounder)



