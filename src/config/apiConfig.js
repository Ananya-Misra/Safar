import https from 'https';
import  fetch from 'node-fetch';
const API_HOST = 'booking-com18.p.rapidapi.com';
const API_KEY = process.env.RAPIDAPI_KEY; // Store your API key in .env for security


    
const makeApiRequest = async(query) => {
    console.log("api requesy");
    const url = `https://booking-com18.p.rapidapi.com/stays/auto-complete?query=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'booking-com18.p.rapidapi.com'
      }
    };
    
    try {
        const response = await fetch(url, options);
        return await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};


export default makeApiRequest; 
