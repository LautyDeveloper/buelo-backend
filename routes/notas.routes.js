import { Router } from 'express';
import {
  getNotesByPerson,
  postNote
} from '../controllers/notas.controllers.js';

const router = Router();

router.get('/', getNotesByPerson);
router.post('/', postNote);

export default router;
