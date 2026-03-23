module.exports = async function handler(req, res) {
  // CORS & Method Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { messages } = req.body;
    
    // Convert the last message from the frontend to the Gemini format
    const userMessage = messages[messages.length - 1].content;

    const apiKey = process.env.GEMINI_API_KEY;
    const model = "gemini-1.5-flash"; // You can also use "gemini-1.5-pro"

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: userMessage }]
          }]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    // Standardize response format so your frontend doesn't break
    const botResponse = data.candidates[0].content.parts[0].text;
    
    return res.status(200).json({
      content: [{ text: botResponse }]
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};