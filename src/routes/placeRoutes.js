import express from 'express';
import { getTravelRoadmapController } from '../controllers/travelController.js';
import{getNearbyPlacesController} from "../controllers/nearByPlaceController.js";

const router = express.Router();

// Route to get nearby places
router.get('/nearby-places', getNearbyPlacesController);

// Route to get travel roadmap
router.get('/travel-roadmap', getTravelRoadmapController);

export default router;
