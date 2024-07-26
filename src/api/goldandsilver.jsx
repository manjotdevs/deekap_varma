// pages/api/metalPrices.js
export default async function handler(req, res) {
    const base = 'USD';
    const currencies = 'EUR,XAU,XAG';
    const url = `${process.env.PUBLIC_API_URL}?api_key=${process.env.PUBLIC_API_KEY}&base=${base}&currencies=${currencies}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching metal prices:', error);
      res.status(500).json({ error: 'Error fetching metal prices' });
    }
  }
  