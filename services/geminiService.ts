import { GoogleGenAI } from "@google/genai";
import { LAB_NAME, RESEARCH_AREAS, TEAM_MEMBERS, PUBLICATIONS, CONTACT_INFO } from '../constants';

const API_KEY = process.env.API_KEY || '';

// Construct a context string from the constants to feed into the AI
const getSystemContext = () => {
  const researchText = RESEARCH_AREAS.map(r => `- ${r.title}: ${r.description}`).join('\n');
  const teamText = TEAM_MEMBERS.map(t => `- ${t.name} (${t.role})`).join('\n');
  const pubText = PUBLICATIONS.slice(0, 5).map(p => `- "${p.title}" in ${p.journal} (${p.year})`).join('\n');
  
  return `
    You are the intelligent assistant for the ${LAB_NAME} website.
    Your goal is to answer visitor questions specifically about the lab using the data below.
    
    RESEARCH AREAS:
    ${researchText}
    
    TEAM MEMBERS:
    ${teamText}
    
    RECENT PUBLICATIONS:
    ${pubText}
    
    CONTACT:
    Address: ${CONTACT_INFO.address}
    Email: ${CONTACT_INFO.email}
    
    If the user asks something outside this context, politely relate it back to the lab's work if possible, or say you don't know but they can contact the PI.
    Keep answers concise, professional, and helpful.
  `;
};

export const generateLabResponse = async (userMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, the AI service is not currently configured (Missing API Key). Please contact the lab directly via email.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: getSystemContext(),
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a technical error while processing your request. Please try again later.";
  }
};
