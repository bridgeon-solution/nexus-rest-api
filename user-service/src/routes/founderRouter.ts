import exp from 'express';
import { founderController } from '../controllers/founderControllers';
import { founderProfileimgUpload } from '../middlewares/founderImage';

export const router = exp.Router();


router.post('/signup', founderProfileimgUpload, founderController.founderSignup)
    .get('/founders', founderController.getAllFounders)
    .get('/founders/:id', founderController.FoundersById)
    .put('/founders/:id', founderProfileimgUpload, founderController.updateFounder)
    .delete('/founders/:id', founderController.deleteFounder)

