import { getNearbyPlaces, getTravelRoadmap } from '../services/travelAi.js';
import { formatDate } from '../utils/FormatDateHelper.js';
import {fetchStaySuggestions, fetchStaysByLocationId} from "../services/bookingService.js";
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

    const bookingsId= await fetchStaySuggestions(destination);
    console.log("Booking Ids"+ bookingsId);
    // // Calculate check-in date 30 days from now
    const checkinDate = new Date();

    // Calculate checkout date 7 days after check-in
    const checkoutDate = new Date(checkinDate);
    checkoutDate.setDate(checkinDate.getDate() + 1);

    // Format the check-in and check-out dates
    const formattedCheckin = formatDate(checkinDate);
    const formattedCheckout = formatDate(checkoutDate);
    console.log(formattedCheckin+ " "+ formattedCheckout);
    const hotelList= await fetchStaysByLocationId(bookingsId, formattedCheckin, formattedCheckout);

    console.log(JSON.stringify(hotelList, null, 2));

    const roadmap = await getTravelRoadmap(start, destination, budget, days);
    res.json({ success: true, roadmap });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
