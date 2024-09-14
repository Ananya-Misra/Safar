import express from "express";
import { getTravelRoadmapController } from "../controllers/travelController.js";
import { getNearbyPlacesController } from "../controllers/nearByPlaceController.js";
import {
  getFlightSearchDestinationsController,
  searchFlightsController,
} from "../controllers/getFlightsController.js";
import { getLiveLikeLocalController} from "../controllers/getLiveLikeLocalController.js"

const router = express.Router();

// Route to get nearby places
router.get("/nearby-places", getNearbyPlacesController);

// Route to get travel roadmap
router.get("/travel-roadmap", getTravelRoadmapController);

// Route to get flights for specific destination
router.get("/searchDestination", getFlightSearchDestinationsController);
router.get("/searchFlights", searchFlightsController);

// Route to get native attractions
router.get('/live-like-local', getLiveLikeLocalController);

export default router;
