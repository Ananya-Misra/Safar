import express from 'express';
import * as bookingController from '../controllers/bookingController.js'; // Ensure you have the .js extension

const router = express.Router();

// Route to get auto-complete suggestions
router.get('/formResponse', bookingController.getAutoComplete);

// Route to search by locationId
router.get('/search/:locationId', bookingController.searchByLocationId);

export default router; // Use export default to export the router