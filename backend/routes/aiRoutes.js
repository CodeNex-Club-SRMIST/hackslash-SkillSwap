const express = require('express');
const router = express.Router();
require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Skill-match suggestions route
router.post('/skill-match', async (req, res) => {
  const { offeredSkill, wantedSkill } = req.body;

  if (!offeredSkill || !wantedSkill) {
    return res.status(400).json({ error: 'Both skills are required' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `
      A user offers: ${offeredSkill}, and wants: ${wantedSkill}.
      Suggest possible skill matches, collaborations, or guidance.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ suggestions: text });
  } catch (err) {
    console.error('Gemini API error:', err);
    res.status(500).json({ error: 'Gemini API error' });
  }
});

// Gemini-powered chat assistant route
router.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });
  } catch (err) {
    console.error('Gemini chat error:', err);
    res.status(500).json({ error: 'Gemini chat API error' });
  }
});

module.exports = router;