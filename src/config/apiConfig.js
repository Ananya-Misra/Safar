import https from "https";
import fetch from "node-fetch";
const API_HOST = "booking-com18.p.rapidapi.com";
const API_KEY = process.env.RAPIDAPI_KEY; // Store your API key in .env for security

export const makeApiRequest = async (path) => {
  const url = `https://booking-com18.p.rapidapi.com/${path}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": "booking-com18.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json(); // Parse response as JSON
    return result; // Return the parsed JSON
  } catch (error) {
    console.error(error);
    throw new Error("Failed to make API request: " + error.message);
  }
};

export const makeApiRequest1 = async () => {
  const url =
    "https://booking-com18.p.rapidapi.com/stays/search?locationId=eyJjaXR5X25hbWUiOiJOZXcgWW9yayIsImNvdW50cnkiOiJVbml0ZWQgU3RhdGVzIiwiZGVzdF9pZCI6IjIwMDg4MzI1IiwiZGVzdF90eXBlIjoiY2l0eSJ9&checkinDate=2024-09-17&checkoutDate=2024-09-26&units=metric&temperature=c";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": "booking-com18.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json(); // Parse response as JSON
    return result; // Return the parsed JSON
  } catch (error) {
    console.error(error);
    throw new Error("Failed to make API request: " + error.message);
  }
};
