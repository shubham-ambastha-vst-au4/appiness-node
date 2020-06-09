// Importing dependencies
import express from 'express';
const router = express.Router();
import controllers from '../controllers/index';

// Defining Routes for category
router.get('/', controllers.getProduct);
router.post('/create', controllers.createProduct);

export default router;