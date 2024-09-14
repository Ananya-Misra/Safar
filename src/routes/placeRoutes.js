import express from "express";
import { getTravelRoadmapController } from "../controllers/travelController.js";
import { getNearbyPlacesController } from "../controllers/nearByPlaceController.js";
import {
  getFlightSearchDestinationsController,
  searchFlightsController,
} from "../controllers/getFlightsController.js";
import express from 'express';
import { getNearbyPlacesController, getTravelRoadmapController,getFlightSearchDestinationsController,searchFlightsController ,getliveLikeLocalController} from '../controllers/placeController.js';

const router = express.Router();

// Route to get nearby places
router.get("/nearby-places", getNearbyPlacesController);

// Route to get travel roadmap
router.get("/travel-roadmap", getTravelRoadmapController);

// Route to get flights for specific destination
router.get("/searchDestination", getFlightSearchDestinationsController);

router.get("/searchFlights", searchFlightsController);

router.get('/liveLikeLocal',getliveLikeLocalController);


export default router;
