import { newsData } from "../data";
import Section from "./Section";

function News({ name }) {
  const data = newsData;
  const cards = data.newsList.map((item) => {
    return (
      <li className={`${name}__item ${item.aditionalClass}`} key={item.id}>
        <div className={`${item.aditionalClass}__container`}>
          <span className={`${item.aditionalClass}__span`}> {item.span} </span>
        </div>
        <div className={`${item.aditionalClass}__wrapper`}>
          <h3 className={`title ${item.aditionalClass}__title`}>
            {item.title}
          </h3>
          <div className={`${item.aditionalClass}__block`}>
            <span className={`${item.aditionalClass}__date`}>
              {" "}
              {item.date}{" "}
            </span>
            <a href="#" className={`${item.aditionalClass}__link`}>
              {item.svg}
            </a>
          </div>
        </div>
      </li>
    );
  });
  return (
    <Section sectionName={name} title={data.title}>
      <p className={`${name}__descr`}>{data.descr}</p>
      <ul className={`${name}__list`}>{cards}</ul>
    </Section>
  );
}

export default News;
