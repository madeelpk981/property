import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Property } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini
// Note: In a production app, never expose keys on client. This is for demo/prototype purposes.
const ai = new GoogleGenAI({ apiKey });

export const createPropertyChat = (property: Property): Chat => {
  const systemInstruction = `
    You are an expert real estate agent named "EstateAI Bot" representing the property titled "${property.title}".
    
    Here are the details of the property you are selling/renting:
    - ID: ${property.id}
    - Price: ${property.currency} ${property.price.toLocaleString()}
    - Location: ${property.location}
    - Type: ${property.type} (${property.category})
    - Specs: ${property.beds} Beds, ${property.baths} Baths, ${property.area} ${property.areaUnit}
    - Description: ${property.description}
    - Features: ${property.features.join(', ')}
    - Agent Contact: ${property.agent.name}, ${property.agent.phone}

    Your Goal:
    1. Answer user questions specifically about this property.
    2. Be polite, professional, and enthusiastic.
    3. If the user asks for something not in the details (like "is the neighborhood quiet?"), give a general positive answer but advise them to contact the human agent ${property.agent.name} for specifics.
    4. Keep answers concise (under 3 sentences) unless asked for a detailed explanation.
    5. Formatting: Use plain text, no markdown styling.
  `;

  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction,
      temperature: 0.7,
    }
  });
};

export const sendMessageToAgent = async (chat: Chat, message: string): Promise<string> => {
  try {
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};