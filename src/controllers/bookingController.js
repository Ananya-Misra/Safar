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
        const url = `stays/search?locationId=${locationId}`;
        const data = await makeApiRequest1();
        return data; // Return the data instead of sending a response
    } catch (error) {
        throw new Error('Failed to fetch data from API: ' + error.message);
    }
};
