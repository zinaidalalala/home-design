import Button from "./Button";
import { heroData } from "../data";
import Section from "./Section";

function Hero({ name }) {
  const data = heroData;
  return (
    <Section sectionName={name}>
      <video autoPlay muted loop className={`${name}__background`}>
        <source src="/video-main.mp4" type="video/mp4" />
      </video>
      <div className={`${name}__wrapper`}>
        <h1 className={`title ${name}__title`}>{data[0].title}</h1>
        <p className={`${data[0].name}__descr`}>{data[0].descr[0]}</p>
        <p className={`${data[0].name}__descr`}>{data[0].descr[1]}</p>
      </div>
      <Button text={"Get Started"} name={name} />
    </Section>
  );
}

export default Hero;
