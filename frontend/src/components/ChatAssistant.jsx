import React, { useState } from 'react';

function ChatAssistant() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setResponse(data.reply || 'No response.');
    } catch {
      setResponse('⚠️ Failed to get a reply.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg mt-6">
      <h3 className="text-xl font-semibold mb-3">🧠 AI Assistant</h3>
      <textarea
        rows="3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about negotiation, skill tips…"
        className="w-full p-2 rounded text-black"
      />
      <button
        onClick={askAI}
        className="mt-3 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        💬 Ask AI
      </button>
      <p className="mt-4 whitespace-pre-wrap">{loading ? '⏳ Thinking...' : response}</p>
    </div>
  );
}

export default ChatAssistant;