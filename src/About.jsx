import { aboutData } from "../data";
import Button from "./Button";
import Section from "./Section";
import Call from "./Call";

function About({ name }) {
  const data = aboutData;
  return (
    <Section sectionName={name}>
      <div className={`${name}__wrapper`}>
        <h3 className={`title ${name}__subtitle`}>{data.subtitle}</h3>
        <p className={`${name}__descr`}>{data.descr}</p>
        <Call name={"call"} />
        <Button text={"Get Free Estimate"} name={name} />
      </div>
    </Section>
  );
}

export default About;
