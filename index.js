import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { fileURLToPath } from 'url'; // Import fileURLToPath
import path from 'path'; // Import path module
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// Get __filename and __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to handle CORS
app.use(cors({
  origin: 'https://homyz-aryan.netlify.app',  // Exact frontend URL without trailing slash
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  // Allow credentials if cookies are needed
}));

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user', userRoute);
app.use("/api/residency", residencyRoute);
