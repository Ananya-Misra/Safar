import { getCompleteTravelPlan } from "../services/travelService.js";

/**
 * Controller function to get travel roadmap
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const getTravelRoadmapController = async (req, res) => {
  const { start, destination, budget, days } = req.body;

  try {
    const roadmapData = await getCompleteTravelPlan(
      start,
      destination,
      budget,
      days
    );

    
    res.json({ success: true, ...roadmapData });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
