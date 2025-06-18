import { Router } from 'express';
import {
  getTurno,
  postTurno,
  deleteTurno,
  getTurnosByPersona
} from '../controllers/turno.controllers.js';

const router = Router();

router.get('/', getTurnosByPersona);
router.get('/:id', getTurno);
router.post('/', postTurno);
router.delete('/:id', deleteTurno);

export default router;
