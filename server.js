// server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Enable CORS for all origins or a specific origin
app.use(cors());

// API URL to fetch external data
const apiUrl = 'https://td2974299.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=175&deploy=2&compid=TD2974299&ns-at=AAEJ7tMQWLG0jbzzqOgpkXaSY2pUfQ1wsTfHXVWuz0-bbSN0uIQ';

// Endpoint to proxy API request
app.get('/api/sales', async (req, res) => {
  try {
    // Fetch data from external API
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Return the API data to the frontend
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Server configuration
const PORT = 5000; // Use port 5000 as requested
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
