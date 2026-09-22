// MUST use VITE_ prefix for Vite to bundle it into React
export const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
export const GROQ_MODEL = import.meta.env.VITE_GROQ_MODEL || 'gemini-flash-lite-latest';
