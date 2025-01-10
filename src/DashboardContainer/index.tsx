import { FC, useState } from "react";
import { API_URL } from "../config";
import { ScriptResponseDTO } from "../types/scriptIntro";
import { parseResponseToArray, Section } from "../utils/introUtils";
const DashboardContainer: FC = () => {
  const [script, setScript] = useState("");
  const [intro, setIntro] = useState<Section[]>([]);

  const handleGenerate = async () => {
    const response = await fetch(`${API_URL}/title/generate-intro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ script }),
    });
    const data: ScriptResponseDTO = await response.json();
    setIntro(parseResponseToArray(data.data.intro));
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
      <button onClick={handleGenerate}>Generate Intro</button>
      {intro && (
        <div>
          <h2>Generated Intro:</h2>
          {intro.map((section) => (
            <div key={section.type}>
              <h3>{section.type}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardContainer;
