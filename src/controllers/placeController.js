import { getNearbyPlaces, getTravelRoadmap } from '../services/travelAi.js';
import {fetchAttractionSuggestions, fetchAttractionsByDestinationId} from "../services/attractionService.js"

/**
 * Controller function to get nearby places
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const getNearbyPlacesController = async (req, res) => {
  const { location } = req.body;

  if (!location) {
    return res.status(400).json({ success: false, message: 'Location is required.' });
  }

  try {
    const places = await getNearbyPlaces(location);
    res.json({ success: true, places });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Controller function to get travel roadmap
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const getTravelRoadmapController = async (req, res) => {
  const { start, destination, budget, days } = req.body;

  if (!start || !destination || !budget || !days) {
    return res.status(400).json({ success: false, message: 'Start point, destination, budget, and number of days are required.' });
  }

  try {
    const id = await fetchAttractionSuggestions(destination);
    console.log("the id for destination"+id);
    const destinationList= await fetchAttractionsByDestinationId(id);
    console.log(JSON.stringify(destinationList, null, 2));

    const roadmap = await getTravelRoadmap(start, destination, budget, days);
    res.json({ success: true, roadmap });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
