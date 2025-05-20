import { Router } from 'express';
import {
  getTurnos,
  getTurno,
  postTurno,
  deleteTurno,
} from '../controllers/turno.controllers.js';

const router = Router();

router.get('/', getTurnos);
router.get('/:id', getTurno);
router.post('/', postTurno);
router.delete('/:id', deleteTurno);

export default router;
