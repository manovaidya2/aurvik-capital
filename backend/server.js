import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes.js';
import caseStudyRoutes from './routes/caseStudyRoutes.js';
import contactRoutes from "./routes/contactRoutes.js";
import bootcampRoutes from "./routes/bootcampRoutes.js";

dotenv.config();

const app = express();

// ✅ Allow multiple origins
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map(o => o.trim())
  : ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use("/uploads", express.static("uploads"));

// MongoDB Connection
console.log('🔌 Attempting MongoDB connection...');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/aurevik')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err.message));

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/casestudies', caseStudyRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/bootcamp", bootcampRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    mongodb: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('\n❌ ERROR:', err.message);
  res.status(500).json({ error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

export default app;
