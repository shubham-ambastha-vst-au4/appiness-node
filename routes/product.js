import express from 'express';
import controllers from '../controllers/index';
const router = express.Router();

router.get('/', controllers.getProduct);
router.post('/create', controllers.createProduct);

export default router;