import { Router } from 'express';
import {
  getNotas,
  getNotasByPersona,
  postNota
} from '../controllers/notas.controllers.js';

const router = Router();

router.get('/', getNotas);
router.get('/:id', getNotasByPersona);
router.post('/', postNota);

export default router;
