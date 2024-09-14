import fetch from 'node-fetch';

// Function to get auto-complete suggestions for attractions
export const getAttractionSuggestions = async (req, res) => {
  const { query } = req.body;  // Extract query from request body

  if (!query) {
    return res.status(400).json({ success: false, message: 'Query parameter is required.' });
  }

  const url = `https://booking-com18.p.rapidapi.com/attraction/auto-complete?query=${encodeURIComponent(query)}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '611bb635a1msh751fc124ab6b7f1p120b9ejsn1da5de547b0b',
      'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching attraction suggestions', error: error.message });
  }
};

// Function to search for attractions based on destinationId
export const searchAttractionsByDestinationId = async (req, res) => {
  const { destinationId } = req.params;

  if (!destinationId) {
    return res.status(400).json({ success: false, message: 'destinationId parameter is required.' });
  }

  const url = `https://booking-com18.p.rapidapi.com/attraction/search?id=${destinationId}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '611bb635a1msh751fc124ab6b7f1p120b9ejsn1da5de547b0b',
      'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching attraction search results', error: error.message });
  }
};
