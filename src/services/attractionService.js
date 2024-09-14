// Function to get auto-complete suggestions for attractions (service)
export const fetchAttractionSuggestions = async (query) => {
  if (!query) throw new Error("Query parameter is required.");

  const url = `https://booking-com18.p.rapidapi.com/attraction/auto-complete?query=${encodeURIComponent(
    query
  )}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "611bb635a1msh751fc124ab6b7f1p120b9ejsn1da5de547b0b",
      "x-rapidapi-host": "booking-com18.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result.data.products[0].id;
};

// Function to search for attractions based on destinationId (service)
export const fetchAttractionsByDestinationId = async (destinationId) => {
  if (!destinationId) throw new Error("destinationId parameter is required.");

  const url = `https://booking-com18.p.rapidapi.com/attraction/search?id=${destinationId}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "611bb635a1msh751fc124ab6b7f1p120b9ejsn1da5de547b0b",
      "x-rapidapi-host": "booking-com18.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();

  // Assuming result.data.products is the array of products
  const products = result.data.products;

  // Extract the name field from each product
  const productNames = products.map((product) => product.name);
  return productNames;
};
