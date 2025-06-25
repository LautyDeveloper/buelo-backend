import { Router } from 'express';
import {
  getMedicationsByPerson,
  postMedication
} from '../controllers/medicaciones.controllers.js';

const router = Router();

router.get('/', getMedicationsByPerson);
router.post('/', postMedication);

export default router;
