import { useState, useCallback } from 'react';
import { GROQ_API_KEY, GROQ_MODEL } from '../config/groq.js';
import { KNOWLEDGE_BASE } from '../data/knowledgeBase.js';

export function useGroqAI() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getResponse = useCallback(async (userMessage, conversationHistory = [], contextHint = '') => {
    setIsLoading(true);
    setError(null);

    // 1. Check if the API key loaded properly
    if (!GROQ_API_KEY || GROQ_API_KEY === 'undefined') {
      const missingKeyErr = 'Gemini API Key is missing or undefined. Check your VITE_GROQ_API_KEY environment variable.';
      console.error('❌ API Error:', missingKeyErr);
      setIsLoading(false);
      setError(missingKeyErr);
      throw new Error(missingKeyErr);
    }

    const systemPrompt = KNOWLEDGE_BASE + (contextHint ? `\n\nCurrent context: ${contextHint}` : '');

    const formattedHistory = conversationHistory.slice(-6).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const contents = [
      ...formattedHistory,
      { role: 'user', parts: [{ text: userMessage }] }
    ];

    try {
      const modelName = (GROQ_MODEL && GROQ_MODEL.includes('gemini')) ? GROQ_MODEL : 'gemini-3.6-flash';
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GROQ_API_KEY}`;

      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: contents,
          generationConfig: {
            maxOutputTokens: 300,
            temperature: 0.7,
          }
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || `HTTP ${response.status}`);
      }

      const reply = data.candidates[0].content.parts[0].text;
      
      setIsLoading(false);
      return reply;
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      throw err;
    }
  }, []);

  return { getResponse, isLoading, error };
}
