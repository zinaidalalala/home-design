import Link from "./Link";
import { articlesData } from "../data";
import Section from "./Section";

function Articles({ name }) {
  const data = articlesData;
  const cards = data.map((item) => {
    return (
      <li className={`${name}__item`} key={item.id}>
        <h3 className={`title ${name}__subtitle`}>Project Plan</h3>
        <p className={`${name}__descr`}>{item.descr}</p>
        <Link />
      </li>
    );
  });
  return (
    <Section sectionName={name}>
      <ul className={`${name}__list`}>{cards}</ul>
    </Section>
  );
}

export default Articles;
