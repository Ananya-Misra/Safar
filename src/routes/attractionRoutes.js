import express from 'express';
import { getAttractionSuggestions, searchAttractionsByDestinationId } from '../controllers/attractionController.js';

const router = express.Router();

// Route for fetching auto-complete suggestions
router.get('/autocomplete', getAttractionSuggestions);

// Route for searching attractions by ID
router.get('/search/:destinationId', searchAttractionsByDestinationId);

export default router;
