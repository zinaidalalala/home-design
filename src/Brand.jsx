import { brandData } from "../data";
import Section from "./Section.jsx";

function Brand({ name }) {
  const data = brandData;
  const cards = data.map((item) => {
    return (
      <li className={`${name}__item`} key={item.id}>
        {item.svg}
      </li>
    );
  });
  return (
    <Section sectionName={name}>
      <ul className={`${name}__list`}>{cards}</ul>
    </Section>
  );
}

export default Brand;
