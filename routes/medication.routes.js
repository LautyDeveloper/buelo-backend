import { Router } from 'express';
import {
  deleteMedication,
  getMedicationsByPerson,
  postMedication
} from '../controllers/medications.controllers.js';

const router = Router();

router.get('/', getMedicationsByPerson);
router.post('/', postMedication);
router.delete('/:id', deleteMedication);

export default router;
