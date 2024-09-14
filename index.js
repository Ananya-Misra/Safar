// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import travelRoutes from './src/routes/travelRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/places', travelRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
