const express = require('express');
const router = express.Router();
const { OpenAIApi, Configuration } = require('openai');

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

// Skill-match suggestions route
router.post('/skill-match', async (req, res) => {
  const { offeredSkill, wantedSkill } = req.body;
  if (!offeredSkill || !wantedSkill) {
    return res.status(400).json({ error: 'Both skills are required' });
  }

  try {
    const prompt = `
You are a skill-matching assistant.
User offers: ${offeredSkill}, wants: ${wantedSkill}
Provide suggestions which users match or how they can exchange skills.
`;
    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful skill-matching assistant.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 300
    });
    res.json({ suggestions: response.data.choices[0].message.content.trim() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'OpenAI API error' });
  }
});

// AI chat assistant route
router.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt text is required' });

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful skill exchange assistant.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 300
    });
    res.json({ reply: response.data.choices[0].message.content.trim() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'OpenAI API error' });
  }
});

module.exports = router;