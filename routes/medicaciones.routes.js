import { Router } from 'express';
import {
  getMedicaciones,
  getMedicacionesByPersona,
  postMedicacion
} from '../controllers/medicaciones.controllers.js';

const router = Router();

router.get('/', getMedicaciones);
router.get('/:id', getMedicacionesByPersona);
router.post('/', postMedicacion);

export default router;
