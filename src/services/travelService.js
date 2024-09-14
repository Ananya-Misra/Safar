// travelService.js
import { fetchStaySuggestions, fetchStaysByLocationId } from "../services/bookingService.js";
import { fetchAttractionSuggestions, fetchAttractionsByDestinationId } from "../services/attractionService.js";
import { formatDate } from '../utils/FormatDateHelper.js';
import { getTravelRoadmap } from './travelAIService.js';

/**
 * Service function to handle fetching all necessary travel data (stays, attractions, roadmap)
 * @param {string} start - Starting location
 * @param {string} destination - Destination
 * @param {number} budget - Travel budget
 * @param {number} days - Number of days for the trip
 * @returns {Object} - Travel roadmap, stays, and attraction information
 */
export const getCompleteTravelPlan = async (start, destination, budget, days) => {
  try {
    // Fetch attraction suggestions
    const attractionId = await fetchAttractionSuggestions(destination);
    const attractionList = await fetchAttractionsByDestinationId(attractionId);

    // Fetch stay suggestions
    const bookingsId = await fetchStaySuggestions(destination);
    
    // Calculate check-in and check-out dates
    const checkInDate = new Date();
    const checkoutDate = new Date(checkInDate);
    checkoutDate.setDate(checkInDate.getDate() + 1);  // Check-out 1 day after check-in
    
    // Format the dates
    const formattedCheckIn = formatDate(checkInDate);
    const formattedCheckout = formatDate(checkoutDate);
  
    // Fetch stays based on the location ID and dates
    const hotelList = await fetchStaysByLocationId(bookingsId, formattedCheckIn, formattedCheckout);

    // Get travel roadmap
    const roadmap = await getTravelRoadmap(start, destination, budget, days, attractionList, hotelList);
    
    // Return all the combined data
    return { roadmap, hotelList, attractionList };
    
  } catch (error) {
    throw new Error(`Error fetching travel data: ${error.message}`);
  }
};