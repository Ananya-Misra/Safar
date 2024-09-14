const https = require('https');

const API_HOST = 'booking-com18.p.rapidapi.com';
const API_KEY = process.env.RAPIDAPI_KEY; // Store your API key in .env for security

const makeApiRequest = (path) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            hostname: API_HOST,
            port: null,
            path: path,
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': API_HOST
            }
        };

        const req = https.request(options, (res) => {
            const chunks = [];

            res.on('data', (chunk) => {
                chunks.push(chunk);
            });

            res.on('end', () => {
                const body = Buffer.concat(chunks);
                resolve(JSON.parse(body.toString()));
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        req.end();
    });
};

module.exports = {
    makeApiRequest
};