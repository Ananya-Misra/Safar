// server.js
import express from 'express';
import dotenv from 'dotenv';
import placeRoutes from './placeRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
app.use(express.json());

// Register routes for nearby places and travel roadmap
app.use('/api/places', placeRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
