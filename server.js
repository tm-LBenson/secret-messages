// server.js
'use strict';
import express, { json } from 'express';
import cors from 'cors';
import taskRoutes from './routes/index.js';

const app = express();

app.use(cors());
app.use(json()); // for parsing application/json

// Routes
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
