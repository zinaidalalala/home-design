import { reviewsData } from "../data";
import Section from "./Section";

function Reviews({ name }) {
  const data = reviewsData;
  const cards = data.map((item) => {
    return (
      <li className={`${name}__item`} key={item.id}>
        <div className={`${name}__wrapper`}>
          <img
            src={item.imgSrc}
            alt={item.imgAlt}
            className={item.imgClass}
            width={item.width}
            height={item.height}
          />
          <div className={`${name}__block`}>
            <h3 className={`title ${name}__subtitle`}>{item.subtitle}</h3>
            <span className={`${name}__descr`}> {item.descr} </span>
          </div>
        </div>
        <p className={`${name}__text`}>{item.text}</p>
      </li>
    );
  });
  return (
    <Section sectionName={name} title={"What the People Thinks About Us"}>
      <ul className={`${name}__list`}>{cards}</ul>
    </Section>
  );
}

export default Reviews;
