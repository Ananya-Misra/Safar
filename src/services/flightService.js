import fetch from 'node-fetch';
// Import dotenv
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

/**
 * Fetch flight search destinations based on a query
 * @param {string} query - The search query for flight destinations
 * @returns {Promise<Array>} - List of flight destinations
 */
export const fetchFlightSearchDestinations = async (query) => {
  if (!query) throw new Error('Query parameter is required.');

  const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${encodeURIComponent(query)}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '611bb635a1msh751fc124ab6b7f1p120b9ejsn1da5de547b0b', // Replace with your actual RapidAPI key
      'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);
  const result = await response.json();
  
  if (!result.status) throw new Error(result.message);
  
  return result.data; // Return the array of destination objects
};

/**
 * Fetch flights based on fromId, toId, and departure date
 * @param {string} fromId - Departure location ID
 * @param {string} toId - Arrival location ID
 * @param {string} departDate - Departure date in YYYY-MM-DD format
 * @returns {Promise<Array>} - List of available flights
 */
export const fetchFlights = async (fromId, toId, departDate) => {
  if (!fromId || !toId || !departDate) throw new Error('fromId, toId, and departDate are required.');

  const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=${fromId}&toId=${toId}&departDate=${departDate}&pageNo=1&adults=1&children=0&sort=BEST&cabinClass=ECONOMY&currency_code=AED`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '611bb635a1msh751fc124ab6b7f1p120b9ejsn1da5de547b0b', 
      'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);
  const result = await response.json();
  
  if (!result.status) throw new Error(result.message);
  
  return result.data; 
};