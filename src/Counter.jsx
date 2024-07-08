import { counterData } from "../data";
import Section from "./Section";

function Counter({ name }) {
  const data = counterData;
  const cards = data.map((item) => {
    return (
      <li className={`${name}__item`} key={item.id}>
        <span className={`${name}__number`}>{item.number}</span>
        <span className={`${name}__descr`}> {item.descr} </span>
      </li>
    );
  });
  return (
    <Section sectionName={name}>
      <ul className="counter__list">{cards}</ul>
    </Section>
  );
}

export default Counter;
