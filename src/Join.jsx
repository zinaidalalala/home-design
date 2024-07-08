import Button from "./Button";
import Section from "./Section";

function Join({ name }) {
  return (
    <Section sectionName={name} title={"Wanna join the interno?"}>
      <p className="join__descr">
        It is a long established fact will be distracted.
      </p>
      <Button text={"Contact With Us"} name={"join"} />
    </Section>
  );
}

export default Join;
