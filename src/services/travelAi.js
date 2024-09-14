import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import dotenv from "dotenv";

// Load environment variables from .env file (if using dotenv)
dotenv.config();

// Initialize the ChatOpenAI model with the API key
const model = new ChatOpenAI({
  modelName: "gpt-4", // Specify model name (e.g., GPT-4)
  openAIApiKey: process.env.OPENAI_API_KEY, // Use the API key from environment variables
  temperature: 0.7, // Adjust for creativity if needed
});

/**
 * Function to get nearby places based on the given location name.
 * The response is formatted as an array of objects with details like
 * location name, expense, time required to travel, and distance.
 *
 * @param {string} location - The name of the starting location
 * @returns {Promise<Array>} - A Promise that resolves to an array of location objects
 */
export async function getNearbyPlaces(location) {
  const query = `Provide a list of tourist attractions near ${location}. 
  For each place, include the name, estimated expense, 
  time required to visit, and the distance from any specific point of ${location} in kilometers. Provide 8-15 places.`;

  const messages = [
    new SystemMessage("You are a travel assistant."),
    new SystemMessage("You need to provide content in json format data."),
    new SystemMessage(`It content will be an array of object where every object has keys: location_name,
        estimated expense in INR, distance from a common point, time to travel.`),
    new HumanMessage(query),
    new SystemMessage('Make sure to return only a JSON array of objects and no extra text or explanation.')
  ];

  const response = await model.invoke(messages);
  const places = JSON.parse(response.content);

  return places;
}

/**
 * Function to get a travel roadmap based on start point, destination, budget, and number of days.
 * The response is a detailed day-by-day travel plan with options for transportation, accommodation, and activities.
 *
 * @param {string} start - The starting point of the journey
 * @param {string} destination - The destination of the journey
 * @param {number} budget - The budget for the trip in INR
 * @param {number} days - Number of days for the trip
 * @returns {Promise<Array>} - A Promise that resolves to an array of roadmap objects for each day
 */
export async function getTravelRoadmap(start, destination, budget, days) {
    const query = `Create a detailed travel roadmap for a trip from ${start} to ${destination}. 
    The budget is ${budget} INR and the trip duration is ${days} days. 
    Include the following details for each day:
    - Modes of transportation
    - Recommended places to stay
    - Suggested activities and places to visit
    - Time allocation for each activity
    - Meals or restaurants, if relevant
    Ensure the roadmap is detailed and time-wise for each day.`;

    const messages = [
      new SystemMessage("You are a travel assistant providing a detailed roadmap."),
      new SystemMessage("You need to provide content in json format data."),
      new SystemMessage(`The response will be an array of objects. Each object will represent a day in the trip and have the following keys: 
          day_number, mode_of_travel, accommodation, activities (which includes places to visit, time to spend, meals if applicable), and total_estimated_expense for the day in INR.`),
      new HumanMessage(query),
      new SystemMessage('Make sure to return only a JSON array of objects and no extra text or explanation.')
    ];

    const response = await model.invoke(messages);
    const travelRoadmap = JSON.parse(response.content);

    return travelRoadmap;
}
