import { Section } from "../types/scriptIntro";

// Function to parse the response into an array
export const parseResponseToArray = (response: string): Section[] => {
  // Split the response into parts using "**" as a delimiter
  const sections = response
    .split("**")
    .map((section) => section.trim())
    .filter(Boolean);

  // Parse each section and assign types based on keywords
  return sections.map((section) => {
    if (section.startsWith("(Video")) {
      return { type: "Video Opening", content: section };
    } else if (section.startsWith("Voiceover")) {
      const voiceoverRegex = /Voiceover\s*\((.*?)\):\s*(.*)/;
      const match = voiceoverRegex.exec(section);
      return { type: "Voiceover", content: match?.[2] ?? section };
    } else if (section.startsWith("(Text on screen")) {
      return {
        type: "Text on Screen",
        content: section.replace("(Text on screen: ", "").replace(")", ""),
      };
    } else if (section.startsWith("(Music")) {
      return { type: "Outro", content: section };
    }
    return { type: "", content: section };
  });
};
