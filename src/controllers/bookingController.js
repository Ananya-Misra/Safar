import fetch from 'node-fetch';

// Function to get auto-complete suggestions for stays
export const getStaySuggestions = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ success: false, message: 'Query parameter is required.' });
  }

  const url = `https://booking-com18.p.rapidapi.com/stays/auto-complete?query=${encodeURIComponent(query)}`;
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
    res.status(500).json({ success: false, message: 'Error fetching stay suggestions', error: error.message });
  }
};

// Function to search for stays based on locationId and dates
export const searchStaysByLocationId = async (req, res) => {
    const { locationId } = req.params;
    const { checkinDate, checkoutDate } = req.params;
  
    console.log('Received params:', req.params);
    console.log('Received body:', req.body);
  
    if (!locationId || !checkinDate || !checkoutDate) {
      return res.status(400).json({
        success: false,
        message: 'locationId, checkinDate, and checkoutDate parameters are required.'
      });
    }
  
    const url = `https://booking-com18.p.rapidapi.com/stays/search?locationId=${encodeURIComponent(locationId)}&checkin_date=${encodeURIComponent(checkinDate)}&checkout_date=${encodeURIComponent(checkoutDate)}&units=metric&temperature=c`;
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
      res.status(500).json({
        success: false,
        message: 'Error fetching stays search results',
        error: error.message
      });
    }};