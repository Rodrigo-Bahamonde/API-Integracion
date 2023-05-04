import { Router } from 'express';
import { RegionesGet } from '../controllers/regiones.js';

const router = Router();

router.get('/', RegionesGet);




export default router;