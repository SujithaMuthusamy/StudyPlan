import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

import authRoutes from './routes/authRoutes.js';
import studyPlanRoutes from './routes/studyPlanRoutes.js';

import { connectDB } from './config/db.js';
connectDB();

const app = express();

// CORS
app.use(cors({ origin: "*" }));

// Body parser
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api', studyPlanRoutes);

// PORT for Render + Local
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
