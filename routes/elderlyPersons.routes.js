import { Router } from 'express';
import * as controller from '../controllers/elderlyPersons.controllers.js';

const router = Router();

router.get('/', controller.getAllPersonasMayores);
router.get('/:id', controller.getPersonaMayorById);
router.post('/', controller.createPersonaMayor);
router.delete('/:id', controller.deletePersonaMayor);

export default router;
