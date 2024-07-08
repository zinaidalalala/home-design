import Section from "./Section";
import { projectsData } from "../data";

function Projects({ name }) {
  const data = projectsData;
  const cards = data.projectsList.map((item) => {
    return (
      <li className={`${name}__item ${item.aditionalClass}`} key={item.id}>
        <div className={`${item.aditionalClass}__container`}>
          <div className={`${name}__wrapper`}>
            <h3 className={`${name}__subtitle`}>{item.subtitle}</h3>
            <span className={`${name}__descr`}> {item.descr} </span>
          </div>
          <a className={`${name}__link`} href="#">
            {item.svg}
          </a>
        </div>
      </li>
    );
  });
  return (
    <Section sectionName={name} title={"Follow Our Projects"}>
      <p className={`${name}__text`}>{data.text}</p>
      <ul className={`${name}__list`}>{cards}</ul>
    </Section>
  );
}

export default Projects;
