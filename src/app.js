import express from 'express';
import bookingRoutes from './routes/bookingRoutes.js'; // Ensure you have the .js extension
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/bookings', bookingRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
