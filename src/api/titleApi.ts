import { ScriptResponseDTO } from "../types/scriptIntro";
import { API_URL } from "./config";

const generateIntro = async (script: string): Promise<ScriptResponseDTO> => {
  try {
    const response = await fetch(`${API_URL}/title/generate-intro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ script }),
    });
    const data: ScriptResponseDTO = await response.json();
    return data;
  } catch (error) {
    console.error("Error generating intro:", error);
    throw error;
  }
};

export { generateIntro };
