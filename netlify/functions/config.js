// netlify/functions/config.js
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      clientId: process.env.GOOGLE_CLIENT_ID,
      apiKey: process.env.GOOGLE_API_KEY,
    }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Or your specific Netlify domain for better security
    },
  };
};