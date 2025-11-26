import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getClient = (): GoogleGenAI => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable is missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateHorseCareAdvice = async (userQuestion: string): Promise<string> => {
  try {
    const ai = getClient();
    
    // Using gemini-2.5-flash for speed and efficiency for a chat widget
    const modelId = "gemini-2.5-flash";

    const systemInstruction = `
      Du bist ein freundlicher, professioneller KI-Assistent auf der Webseite von Juline Walch, einer Pferdephysiotherapeutin.
      Deine Aufgabe ist es, allgemeine Fragen zur Pferdegesundheit, Pflege und Physiotherapie zu beantworten.
      
      Regeln:
      1. Antworte immer höflich, empathisch und professionell (in deutscher Sprache).
      2. Deine Antworten sollten kurz und prägnant sein (maximal 3-4 Sätze).
      3. WICHTIG: Ersetze niemals die Diagnose eines Tierarztes. Bei Anzeichen von Schmerzen, Koliken oder akuten Verletzungen, rate dem Nutzer dringend, einen Tierarzt zu rufen.
      4. Wenn es um Terminvereinbarungen geht, verweise auf die Telefonnummer +49 1515 6930990.
      5. Du bist Fan von ganzheitlicher Behandlung.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: userQuestion,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Entschuldigung, ich konnte darauf keine Antwort generieren. Bitte versuchen Sie es erneut.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Es gab ein technisches Problem. Bitte rufen Sie uns direkt an.";
  }
};