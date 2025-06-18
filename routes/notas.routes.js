import { Router } from 'express';
import {
  getNotasByPersona,
  postNota
} from '../controllers/notas.controllers.js';

const router = Router();

router.get('/', getNotasByPersona);
router.post('/', postNota);

export default router;
