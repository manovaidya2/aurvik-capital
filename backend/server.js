import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes.js';
import caseStudyRoutes from './routes/caseStudyRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// MongoDB Connection
console.log('🔌 Attempting MongoDB connection...');
console.log('📍 Connection String:', process.env.MONGODB_URI ? '✅ Set' : '❌ NOT SET');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/aurevik')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err.message));

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/casestudies', caseStudyRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    mongodb: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// **Enhanced Error Handler**
app.use((err, req, res, next) => {
  console.error('\n❌ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.error('❌ ERROR DETAILS:');
  console.error('   Name:', err.name);
  console.error('   Message:', err.message);
  console.error('   Stack:', err.stack);
  console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  res.status(500).json({ 
    error: err.message,
    type: err.name
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
