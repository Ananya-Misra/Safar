import express from 'express';
import { getNearbyPlacesController, getTravelRoadmapController } from './placeController.js';

const router = express.Router();

// Route to get nearby places
router.post('/nearby-places', getNearbyPlacesController);

// Route to get travel roadmap
router.post('/travel-roadmap', getTravelRoadmapController);

export default router;
