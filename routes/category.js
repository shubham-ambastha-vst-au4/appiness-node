import express from 'express';
import controllers from '../controllers/index';
const router = express.Router();

router.get('/', controllers.getCategory);
router.post('/create', controllers.createCategory);
router.delete('/delete', controllers.deleteCategory);

export default router;