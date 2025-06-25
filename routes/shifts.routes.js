import { Router } from 'express';
import {
  getShift,
  getShiftsByPerson,
  postShift,
  deleteShift
} from '../controllers/shifts.controllers.js';

const router = Router();

router.get('/', getShiftsByPerson);
router.get('/:id', getShift);
router.post('/', postShift);
router.delete('/:id', deleteShift);

export default router;
