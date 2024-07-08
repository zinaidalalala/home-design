import { navData } from "../data";
import Nav from "./Nav.jsx";
import Section from "./Section.jsx";
import Logo from "./Logo.jsx";

function Header({ name }) {
  return (
    <Section wrapper={name} sectionName={name}>
      <div className={`${name}__wrapper`}>
        <Logo name={name} />
        <Nav data={navData} />
      </div>
    </Section>
  );
}

export default Header;
