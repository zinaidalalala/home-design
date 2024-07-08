import { footerData } from "../data";
import Section from "./Section";
import Logo from "./Logo";
import FooterItem from "./FooterItem.jsx";

function Footer({ name }) {
  const { description, links, copyright } = footerData;

  return (
    <Section sectionName={name} wrapper={"footer"}>
      <div className={`${name}__block`}>
        <div className={`${name}__wrapper`}>
          <Logo name={name} />
          <p className={`${name}__descr`}>{description}</p>
        </div>
        <ul className={`${name}__list`}>
          {links.map((link, index) => (
            <FooterItem
              sectionName={name}
              key={index}
              title={link.title}
              items={link.items}
            />
          ))}
        </ul>
      </div>
      <p className="copyright">{copyright}</p>
    </Section>
  );
}

export default Footer;
