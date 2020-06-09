// Importing dependencies
import express from 'express';
const router = express.Router();
import controllers from '../controllers/index';

// Defining Routes for category
router.get('/', controllers.getCategory);
router.post('/create', controllers.createCategory);
router.delete('/delete', controllers.deleteCategory);

export default router;