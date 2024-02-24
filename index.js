const express = require('express');
const bodyParser = require('body-parser');
const translate = require('translate-google');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT ;

app.use(bodyParser.json());

app.get('/',(req,res)=>{
 res.status(200).json("Welcome to English to French translator app!!!")
})

app.post('/translate', (req, res) => {
  try {
    // Check if request body is in JSON format
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Invalid request body. Missing 'text' key." });
    }

    // Translate the English text to French
    translate(text, { to: 'fr' })
      .then((frenchText) => {
        // Respond with the translated text in French
        const response = { translation: frenchText };
        res.json(response);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message || 'Translation error' });
      });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
