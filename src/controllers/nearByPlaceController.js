import { getNearbyPlaces } from "../services/travelAIService.js";
/**
 * Controller function to get nearby places
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const getNearbyPlacesController = async (req, res) => {
  const { location } = req.body;

  try {
    const places = await getNearbyPlaces(location);
    res.json({ success: true, places });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
