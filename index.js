import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to handle CORS
app.use(cors({
  origin: 'https://homyz-aryan.netlify.app',  // Exact frontend URL without trailing slash
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  // Allow credentials if cookies are needed
}));

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user', userRoute)
app.use("/api/residency", residencyRoute)