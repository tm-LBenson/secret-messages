// routes/index.js
'use strict';
import { Router } from 'express';
const router = Router();
import getMessageForTask from '../controllers/index.js';

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome!' });
});
router.post('/task', getMessageForTask);

export default router;
