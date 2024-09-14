import { makeApiRequest, makeApiRequest1 } from '../config/apiConfig.js'; 

export const getAutoComplete = async (req, res) => {
    try {
        const query = req.body.query || 'New York'; 
        const url = `stays/auto-complete?query=${query}`;
        const result = await makeApiRequest(url);
        
        // Assuming result.data[0].id is the location ID you want to use
        const locationId = result.data[0].id;

        // Call searchByLocationId and pass the locationId
        const searchResult = await searchByLocationId(locationId);
        
        // Return the search result to the client
        res.json(searchResult);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from API', details: error.message });
    }
};

export const searchByLocationId = async (locationId) => {
    try {
        console.log(locationId + " loca");
   
  const url = 'https://booking-com18.p.rapidapi.com/stays/search?locationId=eyJjaXR5X25hbWUiOiJOZXcgWW9yayIsImNvdW50cnkiOiJVbml0ZWQgU3RhdGVzIiwiZGVzdF9pZCI6IjIwMDg4MzI1IiwiZGVzdF90eXBlIjoiY2l0eSJ9&checkinDate=2024-09-17&checkoutDate=2024-09-26&units=metric&temperature=c';
  console.log("Making API request to:", url); // Log the path
  const options = {
      method: 'GET',
      headers: {
          'x-rapidapi-key': process.env.RAPIDAPI_KEY,
          'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
      }
  };
  
  try {
      const response = await fetch(url, options);
      
      // Check if the response is OK (status in the range 200-299)
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Parse response as JSON
      console.log(result);
      return result; // Return the parsed JSON
  } catch (error) {
      console.error(error);
      throw new Error('Failed to make API request: ' + error.message);
  }
        return data; // Return the data instead of sending a response
    } catch (error) {
        throw new Error('Failed to fetch data from API: ' + error.message);
    }
};
