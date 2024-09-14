import express from 'express';
import { getNearbyPlacesController, getTravelRoadmapController,getFlightSearchDestinationsController,searchFlightsController } from '../controllers/placeController.js';

const router = express.Router();

// Route to get nearby places
router.get('/nearby-places', getNearbyPlacesController);

// Route to get travel roadmap
router.get('/travel-roadmap', getTravelRoadmapController);

router.get('/searchDestination',getFlightSearchDestinationsController);

router.get('/searchFlights',searchFlightsController);

export default router;
