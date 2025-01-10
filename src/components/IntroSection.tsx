import { FC } from "react";
import { Section } from "../types/scriptIntro";

const IntroSection: FC<Section> = ({ type, content }) => {
  return (
    <div>
      <h3>{type}</h3>
      <p>{content}</p>
    </div>
  );
};

export default IntroSection;
