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
async function getNearbyPlaces(location) {
  // Define the query to get nearby places based on the location
  const query = `Provide a list of tourist attractions near ${location}. 
  For each place, include the name, estimated ticket price or expense, 
  time required to visit, and the distance from ${location} in kilometers.`;

  // Send the query to the OpenAI model
  const messages = [
    new SystemMessage("You are a travel assistant."),
    new SystemMessage("You need to provide content in json format"),
    new SystemMessage(`It content will be an array of object where every object has keys: location_name,
        estimated_ticked_price or other expense, distance from a common point, time to travel, mode of trave,`),
    new HumanMessage(query),
  ];

  // Get the response from the model
  const response = await model.invoke(messages);
  const places = JSON.parse(response.content);

  return places;
}

async function getData(template) {
    // Define the query to get nearby places based on the location
    const data = await model.invoke([new HumanMessage({ content: template })]);
    return data;
  }

// Example usage
async function run() {
  const location = "haridwar";
  try {
    const places = await getNearbyPlaces(location);
    console.log(places);  // Use the JSON response for further processing
  } catch (error) {
    console.error("Error fetching nearby places:", error.message);
  }
}

// Run the example
// run();

console.log(await getData('Haridwar'))
