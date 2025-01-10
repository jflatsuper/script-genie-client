export interface Section {
  type: string;
  content: string;
}

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
      return { type: "videoOpening", content: section };
    } else if (section.startsWith("Voiceover")) {
      const [_, _tone, content] =
        section.match(/Voiceover\s*\((.*?)\):\s*(.*)/) || [];
      return { type: "voiceover", content: content || section };
    } else if (section.startsWith("(Text on screen")) {
      return {
        type: "textOnScreen",
        content: section.replace("(Text on screen: ", "").replace(")", ""),
      };
    } else if (section.startsWith("(Music")) {
      return { type: "outro", content: section };
    }
    return { type: "unknown", content: section };
  });
};
