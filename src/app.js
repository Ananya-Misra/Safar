// server.js
import express from 'express';
import dotenv from 'dotenv';
import bookingRoutes from './routes/bookingRoutes.js'; // Ensure you have the .js extension
import placeRoutes from './routes/placeRoutes.js';
import attractionRoutes from './routes/attractionRoutes.js'

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
app.use(express.json());

// Routes
app.use('/api/places', placeRoutes);

app.use('/api/bookings', bookingRoutes);

app.use('/api/attractions', attractionRoutes);

app.use('/api/bookings', attractionRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
