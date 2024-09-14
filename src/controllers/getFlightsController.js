import {
  fetchFlightSearchDestinations,
  fetchFlights,
} from "../services/flightService.js";
/**
 * Controller function to get flight search destinations
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const getFlightSearchDestinationsController = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res
      .status(400)
      .json({ success: false, message: "Query is required." });
  }

  try {
    const destinations = await fetchFlightSearchDestinations(query);
    res.json({ success: true, destinations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Controller function to search for flights
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const searchFlightsController = async (req, res) => {
  const { fromId, toId, departDate } = req.body; // Expecting these to be sent from the previous step

  if (!fromId || !toId || !departDate) {
    return res
      .status(400)
      .json({
        success: false,
        message: "From ID, To ID, and Departure Date are required.",
      });
  }

  try {
    const flights = await fetchFlights(fromId, toId, departDate);
    res.json({ success: true, flights });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
