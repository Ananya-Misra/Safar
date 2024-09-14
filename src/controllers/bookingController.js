import apiConfig from '../config/apiConfig.js'

// Use named exports instead of using `exports`
export const getAutoComplete = async (req, res) => {
    try {
        const query = req.query.query || 'New York'; // Default to New York if no query is provided
        const data = await apiConfig.makeApiRequest(`/stays/auto-complete?query=${encodeURIComponent(query)}`);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from API', details: error.message });
    }
};

export const searchByLocationId = async (req, res) => {
    try {
        const { locationId } = req.params; // Get locationId from the URL parameters
        const data = await apiConfig.makeApiRequest(`/stays/search?locationId=${locationId}&units=metric&temperature=c`);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from API', details: error.message });
    }
};
