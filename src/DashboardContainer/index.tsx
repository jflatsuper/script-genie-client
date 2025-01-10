import { FC, useState } from "react";
import { Section } from "../types/scriptIntro";
import { parseResponseToArray } from "../utils/introUtils";
import { generateIntro } from "../api/titleApi";
import { IntroSection } from "../components";
const DashboardContainer: FC = () => {
  const [script, setScript] = useState("");
  const [intro, setIntro] = useState<Section[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const response = await generateIntro(script);
      setError(null); // Clear any previous error
      setIntro(parseResponseToArray(response.data.intro));
    } catch (error) {
      setError("Error generating intro. Please try again.");
      setIntro([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>YouTube Intro Generator</h1>
      <textarea
        placeholder="Paste your video script here..."
        value={script}
        onChange={(e) => setScript(e.target.value)}
        rows={10}
        style={{ width: "100%" }}
      />
      <button onClick={handleGenerate}>
        {isLoading ? "Generating..." : "Generate Intro"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {intro && (
        <div>
          <h2>Generated Intro:</h2>
          {intro.map((section) => (
            <IntroSection key={section.type} {...section} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardContainer;
