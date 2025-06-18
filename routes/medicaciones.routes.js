import { Router } from 'express';
import {
  getMedicacionesByPersona,
  postMedicacion
} from '../controllers/medicaciones.controllers.js';

const router = Router();

router.get('/', getMedicacionesByPersona);
router.post('/', postMedicacion);

export default router;
