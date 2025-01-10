import { FC, useState } from "react";
import { API_URL } from "../../config";

const DashboardContainer: FC = () => {
  const [script, setScript] = useState("");
  const [intro, setIntro] = useState("");

  const handleGenerate = async () => {
    const response = await fetch(`${API_URL}/generate-intro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ script }),
    });
    const data = await response.json();
    setIntro(data.intro);
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
          <p>{intro}</p>
        </div>
      )}
    </div>
  );
};

export default DashboardContainer;
