// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// ✅ Use the unified route file
const weatherRoutes = require('./routes/weather');

const app = express();

// 🛡️ Middleware
app.use(cors());
app.use(express.json());

// 📦 API Routes
app.use('/api/weather', weatherRoutes);

// 🔗 MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// 🚀 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
