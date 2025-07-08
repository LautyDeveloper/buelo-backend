import { Router } from 'express';
import {
  getNotesByPerson,
  postNote,
  deleteNote
} from '../controllers/notes.controllers.js';

const router = Router();

router.get('/', getNotesByPerson);
router.post('/', postNote);
router.delete('/:id', deleteNote);

export default router;
