import { liveLikeLocal } from "../services/travelAIService.js";

/**
 * Controller function to get 'Live Like a Local' places based on location
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const getLiveLikeLocalController = async (req, res) => {
    const { location } = req.body;
    if (!location) {
      return res.status(400).json({ success: false, message: 'Location is required.' });
    }
  
    try {
      const localPlaces = await liveLikeLocal(location);
      res.json({ success: true, localPlaces });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

