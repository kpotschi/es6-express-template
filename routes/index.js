import express from 'express';
import { indexController } from '../controllers/index.controller.js';
const router = express.Router();

router.get('/', indexController);

export default router;
